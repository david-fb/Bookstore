<template>
  <section
    id="checkout-product-list"
    class="checkoutProductList"
    aria-label="Checkout Product List"
  >
    <h2 class="Checkout__title Checkout-subtitle">
      Resumen de Compra
    </h2>
    <ul class="checkoutProductList__list">
      <li
        v-for="product in products"
        :key="product.id"
        class="checkoutProductList__item"
      >
        <BsCheckoutProductCard :product="product" />
      </li>
    </ul>
    <div>
      <p>Productos 3 Total: $300</p>
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
