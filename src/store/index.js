import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  data: {
    return() {
      // rhythms: {
      //   [4,4,4,4]
      // }
    }
  },
  state: {
    playing: false,
    barLength: 4,
    rhythm: 'fourths'
  },
  mutations: {
    SET_PLAYING(state, playingStatus) {
      state.playing = playingStatus;
    },
    SET_BARLENGTH(state, beats) {
      state.barLength = beats;
    },
    SET_RHYTHM(state, rhythm) {
      state.rhythm = rhythm;
    }
  },
  actions: {
    setPlayingStatus({ commit }, playingStatus) {
      commit('SET_PLAYING', playingStatus);
    }
  },
  modules: {
  }
})
