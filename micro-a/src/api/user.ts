import http from '@/utils/http';
import { HTTP_RESPONSE_TYPE } from '@/types/index';

/**
 * 删除组织成员
 * @param params
 * @returns
 */
// delete 很多前端库不支delete参数放在body
const deleteMembers = async (orgId: string, members: string[]) => {
  const data: HTTP_RESPONSE_TYPE = await http.delete(` /web/v2/organization/org/${orgId}/members`, { data: { members } });
  return data;
};

/**
 * 根据组织获取学生
 * @param userId
 * @returns
 */
const getMembers = async (params: { page: number; orgId: string; limit: number }) => {
  const { orgId, page, limit } = params;
  const data: HTTP_RESPONSE_TYPE = await http.get(
    `/web/v2/organization/org/${orgId}/members?page=${page}&limit=${limit}`
  );
  return data;
};

/**
 * 根据userId获取用户组织
 * @param userId
 * @returns
 */
const getUserOrgs = async (userId: string) => {
  const data: HTTP_RESPONSE_TYPE = await http.get(`/web/v2/organization/user/${userId}/orgs`);
  return data;
};

/**
 * 获取用户角色
 * @userId
 */
const getUserRole = async (userId: string) => {
  const data: HTTP_RESPONSE_TYPE = await http.get(`/web/v2/organization/role/${userId}`);
  return data;
};
/**
 * 新增用户
 */

const addUser = async (params: {
  email: string;
  name: string;
  phone: string;
  password?: string;
}) => {
  const data: HTTP_RESPONSE_TYPE = await http.post('/web/v2/organization/user', params);
  return data;
};
/**
 * 新增iam用户
 */
const addIamUser = async (params: {
  bisOwner: boolean;
  email: string;
  name: string;
  orgId: string;
  phone: string;
  password?: string;
}) => {
  const data: HTTP_RESPONSE_TYPE = await http.post('/web/v2/organization/user/iam/add', params);
  return data;
};

/**
 * 修改用户
 * @userId
 */
const modifytUser = async (
  userId: string,
  params: {
    email: string;
    name: string;
    phone: string;
  }
) => {
  const data: HTTP_RESPONSE_TYPE = await http.put(`/web/v2/organization/user/${userId}`, params);
  return data;
};

/**
 * 删除用户
 * @ownerId
 */
const deleteUser = async (ownerId: string) => {
  const data: HTTP_RESPONSE_TYPE = await http.delete(`/web/v2/organization/user/${ownerId}`);
  return data;
};

/**
 * 获取用户信息
 * @ownerId
 */
const getUser = async (ownerId: string) => {
  const data: HTTP_RESPONSE_TYPE = await http.get(`/web/v2/organization/user/${ownerId}`);
  return data;
};

/**
 * 修改密码
 * @user
 * @params
 */
const modifyPasswor = async (
  userId: string,
  params: { newPassword: string; oldPassword: string; validateOldPassword: true }
) => {
  const data: HTTP_RESPONSE_TYPE = await http.patch(
    `/web/v2/organization/user/${userId}/password`,
    params
  );
  return data;
};

/**
 * 获取单个用户信息
 * @userIds
 */
const getUserInfo = async (userIds: string) => {
  const data: HTTP_RESPONSE_TYPE = await http.get(`/web/v2/organization/user/${userIds}`);
  return data;
};

/**
 * 获取用户信息
 * @userIds 用户id
 */
const getUserList = async (userIds: string) => {
  const data: HTTP_RESPONSE_TYPE = await http.get(
    `/web/v2/organization/user/userIds?userIds=${userIds}`
  );
  return data;
};

export {
  getUserList,
  addIamUser,
  addUser,
  getUserInfo,
  modifyPasswor,
  getUser,
  deleteUser,
  getUserRole,
  modifytUser,
  getUserOrgs,
  getMembers,
  deleteMembers
};
