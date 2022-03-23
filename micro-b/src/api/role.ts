import http from '@/utils/http';
import { HTTP_RESPONSE_TYPE } from '@/types/index';
import menu from '@/api/menu';

/**
 * 获取角色列表
 * @returns
 */
const getRoleList = async (params: { page: number; limit: number }) => {
  const { page, limit } = params;
  const data: HTTP_RESPONSE_TYPE = await http.get(
    `/web/v2/organization/role/list?page=${page}&limit=${limit}&source=iam`
  );
  console.log('获取角色列表');
  return data;
};

/**
 * 获取用户信息
 * @returns
 */
const authCallback = async (parsms: { code: string; scope: string }) => {
  const data: HTTP_RESPONSE_TYPE = await http.post('/web/v2/auth/sso/callback', parsms);
  return data;
};

/**
 * 获取导航列表
 * @returns
 */
interface MENU_TYPE<T> {
  code: number;
  menuList: Array<T>;
  msg: string;
}

const getNav = async () => new Promise((resolve) => {
  const data: MENU_TYPE<{}> = menu;
  resolve(data);
});
export {
  getRoleList, authCallback, getNav, MENU_TYPE
};
