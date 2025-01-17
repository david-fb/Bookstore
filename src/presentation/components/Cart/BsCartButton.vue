<template>
  <div class="Cart__button__container">
    <button
      class="Cart__button"
      @click="handleOpenCart"
    >
      <CartPlusIcon />  <span>{{ quantity }}</span>
    </button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const products = computed(() => store.state.cart.cart.items);
const quantity = computed(() => products.value?.reduce((acc, val) => {
  return acc + val.quantity;
}, 0));

const handleOpenCart = () => {
  store.dispatch('cart/toggleCart');
};
</script>

<style>
.Cart__button__container {
    position: fixed;
    top: 10px;
    right: 10px;
    z-index: 10;
}
.Cart__button {
    position: relative;
    display: flex;
    align-items: center;
    gap: .2rem;
    padding: .5rem;
    background: var(--base-200);
    color: var(--accent-300);
    border: none;
    outline: none;
    border-radius: 9999px;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, .15);
}
.Cart__button span {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: -5px;
    left: -5px;
    font-size: .9rem;
    background: var(--accent-300);
    color: var(--light);
    border-radius: 9999px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
</style>
