<template>
  <div class="checkoutProductCard">
    <div class="checkoutProductCard__imageContainer">
      <img
        :src="product.image"
        :alt="product.title"
        class="checkoutProductCard__image"
      >
      <button
        class="checkoutProductCard__removeButton"
        aria-label="Quitar producto"
        type="button"
      >
        <ClearIcon
          width="28px"
          height="28px"
        />
      </button>
    </div>
    <div class="checkoutProductCard__details">
      <h3 class="checkoutProductCard__title">
        {{ product.title }}
      </h3>
      <div class="checkoutProductCard__actions">
        <p class="checkoutProductCard__price">
          {{ formatCurrency(product.price) }}
        </p>

        <div class="checkoutProductCard__quantity">
          <button
            v-if="product.quantity == 1"
            type="button"
            aria-label="Quitar producto"
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
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
