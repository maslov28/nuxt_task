<template>
  <div>
    <h1>Products</h1>
    <ProductsList />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("fetchData");
  },
};
</script>
