<template>
  <section
    id="product-list"
    class="productList"
    aria-label="Product List"
  >
    <ul class="productList__list">
      <li
        v-for="product in products"
        :key="product.id"
        class="productList__item"
      >
        <BsProductCard :product="product" />
      </li>
    </ul>
  </section>
</template>

<script setup>
const products = ref([
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in',
    price: 100,
    image: 'https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UY247.5_FMwebp_.jpg?aicid=books-design-system-web',
    stock: 10,
  },
  {
    id: 2,
    title: 'Product 2',
    description: 'Description 2',
    price: 200,
    image: 'https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UY247.5_FMwebp_.jpg?aicid=books-design-system-web',
    stock: 20,
  },
  {
    id: 3,
    title: 'Product 3',
    description: 'Description 3',
    price: 300,
    image: 'https://m.media-amazon.com/images/I/9101MLPcFTL._AC_UY247.5_FMwebp_.jpg?aicid=books-design-system-web',
    stock: 30,
  },
]);
</script>
