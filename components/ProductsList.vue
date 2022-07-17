<template>
  <div>
    <ul>
      <li v-for="item in products" :key="item.id">
        <nuxt-link :to="'/products/' + item.id">{{ item.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>