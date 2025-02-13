export function setFavicon(path: string): void {
  const link: any = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = path;
  document.getElementsByTagName('head')[0].appendChild(link);
}

export function hasFavicon(url: string): Promise<boolean> {
  return new Promise(resolve => {
    let xmlHttp;
    if (window['XMLHttpRequest']) {
      xmlHttp = new XMLHttpRequest();
    }
    if (xmlHttp) {
      xmlHttp.open('Get', url, false);
      xmlHttp.send();
      if (xmlHttp.status == 404) {
        resolve(false);
      } else {
        resolve(true);
      }
    } else {
      resolve(false);
    }
  });
}
