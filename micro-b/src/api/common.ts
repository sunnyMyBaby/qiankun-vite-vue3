import http from '@/utils/http';
import { HTTP_RESPONSE_TYPE } from '@/types/index';
import { getCookies } from '@/utils/auth';

/**
 * 退出登录
 */
const logout = async () => {
  const { token } = getCookies('token');
  const data: HTTP_RESPONSE_TYPE = await http.post('/web/v2/auth/sso/logout', { token });
  return data;
};
export default logout;
