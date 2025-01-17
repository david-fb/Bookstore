<template>
  <div>
    <BsBackdrop>
      <BsCheckout />
    </BsBackdrop>
    <BsHero />
    <BsProductList :products="products" />
    <BsCart v-if="cartOpen" />
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const isVisible = computed(() => store.state.backdrop.isVisible);
const products = computed(() => store.state.product.products);
const cartOpen = computed(() => store.state.cart.cart.open);

onMounted(async () => {
  await store.dispatch('product/fetchProducts');
});

watch(isVisible, (value) => {
  document.body.classList.toggle('modal-open', value);
});
</script>
