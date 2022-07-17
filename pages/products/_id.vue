<template>
  <div>
    <h1>Item</h1>
    <ProductCard 
      :product="$store.state.products.find(el => el.id === $route.params.id)"
    />
  </div>
</template>