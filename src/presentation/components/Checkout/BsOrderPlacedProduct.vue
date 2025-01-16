<template>
  <div class="checkoutProductCard">
    <div class="checkoutProductCard__imageContainer">
      <img
        :src="item?.product?.image_url"
        :alt="item?.product?.title"
        class="checkoutProductCard__image"
      >
    </div>
    <div class="checkoutProductCard__details">
      <h3 class="checkoutProductCard__title">
        {{ item?.title }}
      </h3>
      <p class="checkoutProductCard__price">
        {{ item?.product?.title }} - {{ item?.quantity }} x {{ item?.price }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: {
    type: Object,
    required: true,
  },
});
</script>
