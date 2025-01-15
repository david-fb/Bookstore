<template>
  <article class="ProductCard">
    <div class="ProductCard__content">
      <figure class="ProductCard__figure">
        <img
          class="ProductCard__image"
          :src="product?.image_url"
        >
      </figure>
      <h2
        class="ProductCard__title"
        :title="product?.title"
      >
        {{ product?.title }}
      </h2>
      <p
        class="ProductCard__description"
        :title="product?.description"
      >
        {{ product?.description }}
      </p>
      <p
        class="ProductCard__stock"
      >
        Uni. Disponibles: {{ product?.stock }}
      </p>
      <p class="ProductCard__price">
        {{ formatCurrency(product?.price) }}
      </p>
    </div>
    <div class="ProductCard__actions">
      <button
        class="ProductCard-btn ProductCard__actions-payBtn"
        aria-label="Comprar ahora"
        @click="toggleBackdrop"
      >
        Comprar
      </button>
      <button
        class="ProductCard-btn ProductCard__actions-addBtn"
        aria-label="Agregar al carrito"
      >
        <CartPlusIcon
          width="24"
          height="24"
        />
      </button>
    </div>
  </article>
</template>

<script setup>
import { useStore } from 'vuex';

defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const store = useStore();

const toggleBackdrop = () => store.dispatch('backdrop/toggleBackdrop');
</script>
