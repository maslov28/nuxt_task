export const state = () => ({
  products: []
})

export const getters = {
  getProducts(state) {
    return state.products
  }
}

export const mutations = {
  updateProducts(state, products) {
    state.products = products
  }
}

export const actions = {
  async fetchData(ctx) {
    const res = await fetch('https://6204eefd161670001741b078.mockapi.io/api/v1/products')
    const products = await res.json()
    ctx.commit('updateProducts', products)
  }
}