<template>
  <section class="Cart">
    <div class="Cart__header">
      <h2>Tu Carrito</h2>
      <button
        class="Cart__close"
        aria-label="Cerrar"
        type="button"
        @click="handleClose"
      >
        <ClearIcon
          width="28px"
          height="28px"
        />
      </button>
    </div>

    <div
      v-if="products.length"
      class="Cart__list"
    >
      <ul

        class="Cart__list-ul"
      >
        <li
          v-for="product in products"
          :key="product.id"
          class="productList__item"
        >
          <BsCartProduct :product="product" />
        </li>
      </ul>
      <button
        class="ProductCard-btn ProductCard__actions-payBtn"
        aria-label="Ir a Pagar"
        @click="handleClikcBuy"
      >
        Ir a Pagar
      </button>
    </div>
    <div
      v-else
      class="productList__empty"
    >
      <p>El carrita esta vacio</p>
    </div>
  </section>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();
const products = computed(() => store.state.cart.cart.items);
const toggleBackdrop = () => store.dispatch('backdrop/toggleBackdrop');

const handleClikcBuy = () => {
  store.dispatch('checkout/setItems', [...products.value]);
  toggleBackdrop();
};

const handleClose = () => {
  store.dispatch('cart/toggleCart');
};
</script>

<style>
.Cart {
    position: fixed;
    top: 0;
    right: 0;
    width: 20rem;
    height: 100%;
    background-color: var(--base-100);
    z-index: 99;
    box-shadow: 0 0 10px 5px rgba(0, 0, 0, .15);
    padding: 1rem;
}

.Cart__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.Cart__list-ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.Cart__close {
    background: none;
    border: none;
    outline: none;
    display: inline-flex;
    color: var(--primary-100);
}

.Cart__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.Cart__header h2 {
    font-weight: 600;
    font-size: var(--title-sm);
}
</style>
