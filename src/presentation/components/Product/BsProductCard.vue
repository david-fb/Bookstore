<template>
  <article class="ProductCard">
    <div class="ProductCard__content">
      <figure class="ProductCard__figure">
        <img
          class="ProductCard__image"
          :src="product.image"
        >
      </figure>
      <h2
        class="ProductCard__title"
        :title="product.title"
      >
        {{ product.title }}
      </h2>
      <p
        class="ProductCard__description"
        :title="product.description"
      >
        {{ product.description }}
      </p>
      <p
        class="ProductCard__stock"
      >
        Uni. Disponibles: {{ product.stock }}
      </p>
      <p class="ProductCard__price">
        {{ formatCurrency(product.price) }}
      </p>
    </div>
    <div class="ProductCard__actions">
      <button
        class="ProductCard-btn ProductCard__actions-payBtn"
        aria-label="Comprar ahora"
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

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.ProductCard {
  position: relative;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  transition: all 0.3s ease;
}

.ProductCard__content {
  flex: 1;
  color: var(--primary-100);
  display: flex;
  flex-direction: column;
  gap: .6rem;
}
.ProductCard__figure {
  margin: 0 auto;
  width: 50%;
}

.ProductCard__title {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: var(--sm);
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1;
  font-weight: 500;
  font-style: normal;
}
.ProductCard__description {
  flex: 1;
  font-size: var(--xs);
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--primary-200);
}
.ProductCard__stock {
  margin: 0;
  font-size: var(--xs);
}
.ProductCard__price {
  margin: 0;
  font-weight: bold;
  font-size: var(--sm);
  font-weight: 800;
}
.ProductCard__actions {
  display: flex;
  gap: 0.5rem;
}
.ProductCard-btn {
  padding: 0.5rem 1rem;
  color: var(--primary-100);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
}
.ProductCard__actions-addBtn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--secondary);
}
.ProductCard__actions-addBtn:hover {
  background-color: var(--secondary-200);
}

.ProductCard__actions-payBtn {
  flex: 1;
  background-color: var(--accent-200);
  color: var(--light);
}
.ProductCard__actions-payBtn:hover {
  background-color: var(--accent-300);
}

.ProductCard__actions-quantity {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.ProductCard__actions-quantity input {
  padding: 0.5rem;
  border: 1px solid var(--base-200);
  border-radius: 0.5rem;
  width: 3rem;
}
</style>
