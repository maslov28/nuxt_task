<template>
  <div>
    <h3>{{ product.title }}</h3>
    <p>{{ product.description }}</p>
    <span>{{ product.price }}</span>
  </div>
</template>

<script>
export default {
  props: ['product']
}
</script>