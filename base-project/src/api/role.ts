import menu from '@/api/menu';

/**
 * 获取导航列表
 * @returns
 */
interface MENU_TYPE<T> {
  code: number;
  menuList: Array<T>;
  msg: string;
  permissions: string[];
}

const getNav = async () =>
  // const data: any = await http.get(`/web/v2/organization/sys/menu/nav`);
  // return data;
  new Promise((resolve) => {
    const data: MENU_TYPE<{}> = menu;
    resolve(data);
  });
export { getNav, MENU_TYPE };
