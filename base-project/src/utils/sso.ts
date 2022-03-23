import { useRoute } from 'vue-router';
import router from '@/router/index';

const loginUrl = import.meta.env.VITE_APP_SSO_REDIRECT_URI;

export const setSSORedirectUrl = () => {
  const { path } = router.currentRoute.value;
  console.log(88888888, router.currentRoute.value);
  console.log(
    7777777777,
    path,
    encodeURIComponent(path),
    `${loginUrl}&state=${encodeURIComponent(path)}`
  );
  return `${loginUrl}&state=${encodeURIComponent(path)}`;
};

export const getSSORedirectUrl = () => {
  const route = useRoute();
  const { state = '' } = route.query;
  console.group(88888, state, decodeURIComponent(`${state}`));
  return decodeURIComponent(`${state}`);
};
