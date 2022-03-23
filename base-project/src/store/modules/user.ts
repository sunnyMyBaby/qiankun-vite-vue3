import Cookies from 'js-cookie';
import { getUserInfo } from '@/api/user';

export type STATE_TYPE = {
  userInfo: {
    // createTime: string;
    // deleteStatus: boolean;
    // email: string;
    // name: string;
    // phone: string;
    // status: string;
    // updateTime: string;
    // userId: string;
  };
};

const state: STATE_TYPE = { userInfo: {} };

const mutations = {
  SET_USER_INFO: (st: STATE_TYPE, userInfo: any) => {
    const val = st;
    val.userInfo = userInfo;
  }
};

const actions = {
  async setUserInfo({ commit }: any) {
    return new Promise((resolve, reject) => {
      getUserInfo(Cookies.get('userId') || '')
        .then((res) => {
          const { code, data = [] } = res;
          if (code === 0) {
            commit('SET_USER_INFO', data);
          } else {
            commit('SET_USER_INFO', {});
          }
          resolve(res);
        })
        .catch((error) => {
          commit('SET_USER_INFO', {});
          reject(error);
        });
    });
  }
};

const getters = { getUserInfo: (st: STATE_TYPE) => st.userInfo };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
