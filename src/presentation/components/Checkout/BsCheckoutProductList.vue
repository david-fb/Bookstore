<template>
  <section
    id="checkout-product-list"
    class="checkoutProductList"
    aria-label="Checkout Product List"
  >
    <ul class="checkoutProductList__list">
      <li
        v-for="product in products"
        :key="product.id"
        class="checkoutProductList__item"
      >
        <BsCheckoutProductCard :product="product" />
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
