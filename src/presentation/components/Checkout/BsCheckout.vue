<template>
  <form class="Checkout">
    <h1 class="Checkout__title Checkout-title">
      Finalizar Compra
    </h1>
    <div class="Checkout__summary">
      <h2 class="Checkout__title Checkout-subtitle">
        Resumen de Compra
      </h2>
      <BsCheckoutProductList :products="cart" />
      <div>
        <h2>Total: $300</h2>
      </div>
    </div>

    <BsDeliveyInfo />

    <BsPaymentInfo />

    <input
      type="submit"
      value="Pagar Ahora"
      class="Checkout__submit"
    >
  </form>
</template>

<script setup>
const cart = ref([
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
    price: 100,
    image: 'https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UY247.5_FMwebp_.jpg?aicid=books-design-system-web',
    stock: 10,
    quantity: 1,
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description 2',
    price: 200,
    image: 'https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UY247.5_FMwebp_.jpg?aicid=books-design-system-web',
    stock: 20,
    quantity: 2,
  },
]);
</script>
