<template>
  <div class="checkoutProductCard">
    <div class="checkoutProductCard__imageContainer">
      <!-- <img
        :src="product?.image_url"
        :alt="product?.title"
        class="checkoutProductCard__image"
      > -->
      <button
        class="checkoutProductCard__removeButton"
        aria-label="Quitar producto"
        type="button"
        @click="removeProduct"
      >
        <ClearIcon
          width="28px"
          height="28px"
        />
      </button>
    </div>
    <div class="checkoutProductCard__details">
      <h3 class="checkoutProductCard__title">
        {{ product?.title }}
      </h3>
      <div class="cartProduct__actions">
        <p class="checkoutProductCard__price">
          {{ formatCurrency(product?.price * product.quantity) }}
        </p>

        <div class="checkoutProductCard__quantity cartProduct__actions-quantity">
          <button
            v-if="product?.quantity == 1"
            type="button"
            aria-label="Quitar producto"
            @click="removeProduct"
          >
            <TrashIcon
              width="20px"
              height="20px"
              color="var(--primary-300)"
            />
          </button>
          <button
            v-else-if="product.quantity > 1"
            type="button"
            aria-label="Disminuir cantidad"
            @click="decreaseProduct"
          >
            <MinusIcon
              width="20px"
              height="20px"
              color="var(--primary-300)"
            />
          </button>
          <span>
            {{ product.quantity }}
          </span>
          <button
            type="button"
            aria-label="Aumentar cantidad"
            :disabled="product.stock === product.quantity"
            :class="{ 'btn-disabled': product.stock === product.quantity }"
            @click="increaseProduct"
          >
            <PlusIcon
              width="20px"
              height="20px"
              color="var(--accent-300)"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const store = useStore();

const removeProduct = () => {
  store.dispatch('cart/removeItem', props.product);
};

const increaseProduct = () => {
  store.dispatch('cart/incrementItem', props.product);
};

const decreaseProduct = () => {
  store.dispatch('cart/decrementItem', props.product);
};
</script>

<style>
.cartProduct__actions {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
.cartProduct__actions-quantity {
    width: fit-content;
}
</style>
