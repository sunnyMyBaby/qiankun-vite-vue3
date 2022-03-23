import router from '@/router/index';

const loginUrl = import.meta.env.VITE_APP_SSO_REDIRECT_URI;

export const setSSORedirectUrl = (toUrl?: string) => {
  const { path } = router.currentRoute.value;
  const { state = '' } = router.currentRoute.value.query;
  const url = state || toUrl || path;
  return `${loginUrl}&state=setSSORedirectUrl${url}`;
};

export const getSSORedirectUrl = () => {
  const { state = '' } = router.currentRoute.value.query;
  return `${state}`.replace('setSSORedirectUrl', '');
};
