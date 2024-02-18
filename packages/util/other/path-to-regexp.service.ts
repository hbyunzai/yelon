/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Injectable } from '@angular/core';

import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Injectable({
  providedIn: 'root'
})
export class PathToRegexpService {
  constructor() {}
  DEFAULT_DELIMITER = '/';

  PATH_REGEXP = new RegExp(
    ['(\\\\.)', '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'].join('|'),
    'g'
  );

  parse(str: NzSafeAny, options: NzSafeAny) {
    const tokens = [];
    let key = 0;
    let index = 0;
    let path = '';
    const defaultDelimiter = (options && options.delimiter) || this.DEFAULT_DELIMITER;
    const whitelist = (options && options.whitelist) || undefined;
    let pathEscaped = false;
    let res;

    while ((res = this.PATH_REGEXP.exec(str)) !== null) {
      const m = res[0];
      const escaped = res[1];
      const offset = res.index;
      path += str.slice(index, offset);
      index = offset + m.length;

      // Ignore already escaped sequences.
      if (escaped) {
        path += escaped[1];
        pathEscaped = true;
        continue;
      }

      let prev = '';
      const name = res[2];
      const capture = res[3];
      const group = res[4];
      const modifier = res[5];

      if (!pathEscaped && path.length) {
        const k = path.length - 1;
        const c = path[k];
        const matches = whitelist ? whitelist.indexOf(c) > -1 : true;

        if (matches) {
          prev = c;
          path = path.slice(0, k);
        }
      }

      // Push the current path onto the tokens.
      if (path) {
        tokens.push(path);
        path = '';
        pathEscaped = false;
      }

      const repeat = modifier === '+' || modifier === '*';
      const optional = modifier === '?' || modifier === '*';
      const pattern = capture || group;
      const delimiter = prev || defaultDelimiter;

      tokens.push({
        name: name || key++,
        prefix: prev,
        delimiter: delimiter,
        optional: optional,
        repeat: repeat,
        pattern: pattern
          ? this.escapeGroup(pattern)
          : `[^${this.escapeString(delimiter === defaultDelimiter ? delimiter : delimiter + defaultDelimiter)}]+?`
      });
    }

    // Push NzSafeAny remaining characters.
    if (path || index < str.length) {
      tokens.push(path + str.substr(index));
    }

    return tokens;
  }
  compile(str: NzSafeAny, options: NzSafeAny) {
    return this.tokensToFunction(this.parse(str, options), options);
  }

  tokensToFunction(tokens: NzSafeAny, options: NzSafeAny) {
    const matches = new Array(tokens.length);

    for (let i = 0; i < tokens.length; i++) {
      if (typeof tokens[i] === 'object') {
        matches[i] = new RegExp(`^(?:${tokens[i].pattern})$`, this.flags(options));
      }
    }

    return function (data: NzSafeAny, options: NzSafeAny) {
      let path = '';
      const encode = (options && options.encode) || encodeURIComponent;
      const validate = options ? options.validate !== false : true;

      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];

        if (typeof token === 'string') {
          path += token;
          continue;
        }

        const value = data ? data[token.name] : undefined;
        let segment;

        if (Array.isArray(value)) {
          if (!token.repeat) {
            throw new TypeError(`Expected "${token.name}" to not repeat, but got array`);
          }

          if (value.length === 0) {
            if (token.optional) {
              continue;
            }

            throw new TypeError(`Expected "${token.name}" to not be empty`);
          }

          for (let j = 0; j < value.length; j++) {
            segment = encode(value[j], token);

            if (validate && !matches[i].test(segment)) {
              throw new TypeError(`Expected all "${token.name}" to match "${token.pattern}"`);
            }

            path += (j === 0 ? token.prefix : token.delimiter) + segment;
          }

          continue;
        }

        if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
          segment = encode(String(value), token);

          if (validate && !matches[i].test(segment)) {
            throw new TypeError(`Expected "${token.name}" to match "${token.pattern}", but got "${segment}"`);
          }

          path += token.prefix + segment;
          continue;
        }

        if (token.optional) {
          continue;
        }

        throw new TypeError(`Expected "${token.name}" to be ${token.repeat ? 'an array' : 'a string'}`);
      }

      return path;
    };
  }

  escapeString(str: NzSafeAny) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
  }

  escapeGroup(group: NzSafeAny) {
    return group.replace(/([=!:$/()])/g, '\\$1');
  }

  flags(options: NzSafeAny) {
    return options && options.sensitive ? '' : 'i';
  }

  regexpToRegexp(path: NzSafeAny, keys: NzSafeAny) {
    if (!keys) {
      return path;
    }

    const groups = path.source.match(/\((?!\?)/g);

    if (groups) {
      for (let i = 0; i < groups.length; i++) {
        keys.push({
          name: i,
          prefix: null,
          delimiter: null,
          optional: false,
          repeat: false,
          pattern: null
        });
      }
    }

    return path;
  }

  arrayToRegexp(path: NzSafeAny, keys: NzSafeAny, options: NzSafeAny): RegExp {
    const parts = [];

    for (let i = 0; i < path.length; i++) {
      parts.push(this.pathToRegexp(path[i], keys, options).source);
    }

    return new RegExp(`(?:${parts.join('|')})`, this.flags(options));
  }

  stringToRegexp(path: NzSafeAny, keys: NzSafeAny, options: NzSafeAny) {
    return this.tokensToRegExp(this.parse(path, options), keys, options);
  }

  tokensToRegExp(tokens: NzSafeAny, keys: NzSafeAny, options: NzSafeAny) {
    options = options || {};

    const strict = options.strict;
    const start = options.start !== false;
    const end = options.end !== false;
    const delimiter = options.delimiter || this.DEFAULT_DELIMITER;
    const endsWith = []
      .concat(options.endsWith || [])
      .map(this.escapeString)
      .concat('$')
      .join('|');
    let route = start ? '^' : '';

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        route += this.escapeString(token);
      } else {
        const capture = token.repeat
          ? `(?:${token.pattern})(?:${this.escapeString(token.delimiter)}(?:${token.pattern}))*`
          : token.pattern;

        if (keys) {
          keys.push(token);
        }

        if (token.optional) {
          if (!token.prefix) {
            route += `(${capture})?`;
          } else {
            route += `(?:${this.escapeString(token.prefix)}(${capture}))?`;
          }
        } else {
          route += `${this.escapeString(token.prefix)}(${capture})`;
        }
      }
    }

    if (end) {
      if (!strict) {
        route += `(?:${this.escapeString(delimiter)})?`;
      }

      route += endsWith === '$' ? '$' : `(?=${endsWith})`;
    } else {
      const endToken = tokens[tokens.length - 1];
      const isEndDelimited =
        typeof endToken === 'string' ? endToken[endToken.length - 1] === delimiter : endToken === undefined;

      if (!strict) {
        route += `(?:${this.escapeString(delimiter)}(?=${endsWith}))?`;
      }
      if (!isEndDelimited) {
        route += `(?=${this.escapeString(delimiter)}|${endsWith})`;
      }
    }

    return new RegExp(route, this.flags(options));
  }

  pathToRegexp(path: NzSafeAny, keys: NzSafeAny, options: NzSafeAny) {
    if (path instanceof RegExp) {
      return this.regexpToRegexp(path, keys);
    }

    if (Array.isArray(path)) {
      return this.arrayToRegexp(/** @type {!Array} */ path, keys, options);
    }

    return this.stringToRegexp(/** @type {string} */ path, keys, options);
  }
}
