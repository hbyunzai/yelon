import { escapeHTML, genAttr, generateSluggedId, isHeading, isStandalone } from './utils';
import { highlight } from '../converters/highlight';

// eslint-disable-next-line @typescript-eslint/no-require-imports
const JsonML = require('jsonml.js/lib/utils');

let headingList: any[] = [];
const converters = [highlight()].concat([
  [
    (node: any) => typeof node === 'string',
    (node: string) => {
      if (node.includes('(deprecated)')) {
        node = node.replace('(deprecated)', `<i class="deprecated" title="已过期(Deprecated)"></i>`);
      }
      return node;
    }
  ],
  [
    (node: any) => JsonML.isElement(node) && isHeading(node),
    (node: any) => {
      const tagName = JsonML.getTagName(node) as string;
      const children = JsonML.getChildren(node);
      const sluggedData = generateSluggedId(children);
      // <a href="#${sluggedId}" class="anchor">#</a>
      // const childrenHtml = children.map(toHtml).join('');
      // const goTo = tagName === 'h2' ? `<a onclick="window.location.hash = '${sluggedId}'" class="anchor">#</a>` : '';
      const apiTypes = ['directive', 'service', 'class']
        .filter(key => (sluggedData as any)[key] === true)
        .map(w => `<label class="api-type-label ${w}">${w}</label>`)
        .join('');
      const copy =
        /h[0-9]{1}/g.test(tagName) && +tagName.substring(1) > 1
          ? `<a class="lake-link"><i data-anchor="${sluggedData.id}"></i></a>`
          : ``;
      return `<${tagName} id="${sluggedData.id}">${copy}${sluggedData.id}${apiTypes}</${tagName}>`;
    }
  ],
  [
    (node: any) => JsonML.isElement(node) && JsonML.getTagName(node) === 'img',
    (node: any) => {
      const attrs = JsonML.getAttributes(node);
      const ret: any[] = [];
      if (attrs) {
        for (const key in attrs) {
          let value = attrs[key];
          if (key === 'src' && ~value.indexOf(' | ')) {
            const imgWH = value.split(' | ')[1].trim().split('=');
            for (let i = 0; i < imgWH.length; i += 2) {
              ret.push(`${imgWH[i]}=${imgWH[i + 1]}`);
            }
            value = value.split(' | ')[0];
          }
          if (value) ret.push(`${key}="${value}"`);
        }
      }
      return `<img ${ret.join(' ')} />`;
    }
  ],
  [
    (node: any) => JsonML.isElement(node) && JsonML.getTagName(node) === 'a',
    (node: any) => {
      const attrs = { ...JsonML.getAttributes(node) };
      let target = attrs.href.startsWith('//') || attrs.href.startsWith('http') ? ' target="_blank"' : '';
      if (~attrs.href.indexOf('ng.yunzainfo.com')) target = '';
      return `<a${target} href="${attrs.href}" data-url="${attrs.href}">${JsonML.getChildren(node).map(toHtml).join('')}</a>`;
    }
  ],
  [
    (node: any) => !Array.isArray(node),
    (node: any) => {
      if (!node.url) return '';
      return `<!--${node.url}-->`;
    }
  ],
  [
    () => true,
    (node: any) => {
      const tagName = JsonML.getTagName(node);
      const attrs = genAttr({ ...JsonML.getAttributes(node) });
      const tag = `${tagName ? `<${tagName}${attrs ? ` ${attrs}` : ''}>` : ''}`;
      return `${tag}${isStandalone(tagName) ? '' : JsonML.getChildren(node).map(toHtml).join('') + (tagName ? `</${tagName}>` : '')}`;
    }
  ]
]);

export function toHtml(markdownData: any[], codeEscape: boolean = true): any {
  const pair: any = converters.filter((converter: any) => {
    return converter[0](markdownData);
  })[0];
  const ret: string = pair[1](markdownData);
  if (codeEscape) {
    return ret.replace(
      /<pre class="hljs language-([a-zA-Z0-9]+)"><code>([\s\S]+)<\/code><\/pre>/g,
      (_fullWord: string, lang: string, code: string) => {
        if (lang === 'html') {
          code = code.includes(`&lt;`) && code.includes(`&gt;`) ? code : escapeHTML(code);
        } else if ((lang === 'ts' || lang === 'typescript') && code.includes(`template: `)) {
          code = code.replace(/template: `([^`]+)`/g, (_tFullword: string, tHtml: string) => {
            return `template: \`${escapeHTML(tHtml)}\``;
          });
        }
        return `<pre class="hljs language-${lang}"><code>${code}</code></pre>`;
      }
    );
  } else {
    //  && ~headingList.indexOf(ret)
    if (/^<code>/g.test(ret)) {
      return ret.replace(/([a-zA-Z]+)/g, (word: string) => {
        if (headingList.indexOf(word) !== -1) {
          return `<a data-toc="${word}">${word}</a>`;
        }
        return word;
      });
    }
  }
  return ret;
}

function fixAngular(html: string): string {
  let res = html.replace(/<code>(.*?)<\/code>/gim, (fullWord: string, content: string) => {
    return ~content.indexOf(`</a>`) ? fullWord : `<code>${content.replace(`<`, `&lt;`)}</code>`;
  });
  if (res.startsWith('<article>') && res.endsWith('</article>')) {
    res = res.substring(9, res.length - 10);
  }
  return res;
}

export function generateMd(markdownData: any): any {
  const contentChildren = JsonML.getChildren(markdownData.content);
  headingList = contentChildren
    .filter((node: any) => JsonML.isElement(node) && isHeading(node))
    .filter((arr: any[]) => arr.length === 2)
    .map((arr: any[]) => arr[1]);

  const apiStartIndex = contentChildren.findIndex(
    (node: any) => JsonML.getTagName(node) === 'h2' && /^API/.test(JsonML.getChildren(node)[0])
  );

  const ret: any = {};

  if (apiStartIndex > -1) {
    const content = contentChildren.slice(0, apiStartIndex);
    ret.content = [''].concat(content);

    const api = contentChildren.slice(apiStartIndex);
    ret.api = [''].concat(api);
  } else {
    ret.content = markdownData.content;
  }

  if (ret.content) ret.content = fixAngular(toHtml(ret.content));

  if (ret.api) ret.api = fixAngular(toHtml(ret.api));

  return ret;
}
