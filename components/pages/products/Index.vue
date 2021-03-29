<template>
  <div>
    <h1 class="text-2xl mb-2">Products</h1>
    <ul data-test-id="products">
      <li v-for="product in products" :data-test-id="`product-${product.id}`" v-bind:key="product.id">
        {{ product.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'products-index',

  data() {
    return {
      products: [],
    }
  },

  created() {
    fetch('/api/products')
      .then((res) => res.json())
      .then((json) => {
        this.products = json.products
      })
  },
}
</script>
