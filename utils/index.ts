let _cookie = '';

export function setCookie(cookie: string) {
  _cookie = cookie;
}

export function getCookie() {
  return _cookie;
}
