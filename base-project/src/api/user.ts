/* eslint-disable import/prefer-default-export */
import http from '@/utils/http';
import { HTTP_RESPONSE_TYPE } from '@/types/index';

/**
 * 获取单个用户信息
 * @returns
 */
const getUserInfo = async (userIds: string) => {
  const data: HTTP_RESPONSE_TYPE = await http.get(`/web/v2/organization/user/${userIds}`);
  return data;
};
/**
 * 添加用户
 * @returns
 */

export { getUserInfo };
