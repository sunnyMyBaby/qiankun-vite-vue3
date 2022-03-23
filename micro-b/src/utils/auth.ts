import Cookies from 'js-cookie';

const getCookies = (cookie?: string) => {
  if (typeof cookie === 'string') {
    return { [cookie]: Cookies.get(cookie) };
  }
  return { token: Cookies.get('token') };
};

const removeCookies = (names: string[]) => {
  if (Array.isArray(names)) {
    names.forEach((name: string) => {
      Cookies.remove(name);
    });
  }
};

export { getCookies, removeCookies };
