<template>
  <section
    id="product-list"
    class="productList"
    aria-label="Product List"
  >
    <ul
      v-if="products.length"
      class="productList__list"
    >
      <li
        v-for="product in products"
        :key="product.id"
        class="productList__item"
      >
        <BsProductCard :product="product" />
      </li>
    </ul>
    <div
      v-else
      class="productList__empty"
    >
      <p>No hay productos disponibles en este momento</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  products: {
    type: Array,
    required: true,
  },
});
</script>
