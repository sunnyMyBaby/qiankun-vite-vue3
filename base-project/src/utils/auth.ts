import Cookies from 'js-cookie';

const getToken = () => ({ token: Cookies.get('token') });
export default getToken;
