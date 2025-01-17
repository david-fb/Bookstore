<template>
  <div class="hero">
    <BsCartButton />
    <div class="hero__content">
      <h1 class="hero__title">
        Encuentra el mejor libro para ti
      </h1>
    </div>
    <div class="hero__actions">
      <figure class="hero__actions-figure">
        <img
          class="hero__actions-image"
          src="@assets/imgs/book2.webp"
        >
      </figure>
      <button
        class="hero__actions-buyBtn"
        @click="moveToProductList"
      >
        Compra ahora
      </button>
    </div>
  </div>
</template>

<script setup>
const moveToProductList = () => {
  const productList = document.getElementById('product-list');
  productList.scrollIntoView({ behavior: 'smooth' });
};
</script>
