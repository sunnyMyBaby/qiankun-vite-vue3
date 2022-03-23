export type STATE_TYPE = {
  sidebar: boolean;
};

const state: STATE_TYPE = { sidebar: false };

const mutations = {
  TOGGLE_SIDEBAR: (st: STATE_TYPE) => {
    const val = st;
    val.sidebar = !st.sidebar;
  }
};

const actions = {
  toggleSideBar({ commit }: any) {
    commit('TOGGLE_SIDEBAR');
  }
};

const getters = { sidebar: (st: STATE_TYPE) => st.sidebar };

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
