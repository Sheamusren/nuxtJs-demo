export const state = () => ({
  menu: '222'
})

export const mutations = {
  add(state, menu) {
    state.menu = menu
  },
  remove(state) {
    state.menu = ''
  }
}
