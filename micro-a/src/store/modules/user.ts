export type STATE_TYPE = {
  userInfo: {
    name: string
  };
};

const state: STATE_TYPE = { userInfo: { name: '' } };

const mutations = {
  SET_USER_INFO: (st: STATE_TYPE, userInfo: any) => {
    const val = st;
    val.userInfo = userInfo;
  }
};

const actions = {
  async setUserInfo({ commit }: any) {
    return new Promise((resolve) => {
      commit('SET_USER_INFO', { name: 'test' });
      resolve({ name: 'test' });
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
