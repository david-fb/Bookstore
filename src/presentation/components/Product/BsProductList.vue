<template>
  <section
    id="product-list"
    class="productList"
    aria-label="Product List"
  >
    <ul class="productList__list">
      <li
        v-for="product in products"
        :key="product.id"
        class="productList__item"
      >
        <BsProductCard :product="product" />
      </li>
    </ul>
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
