import { describe, test, expect, vi, beforeEach } from 'vitest';

import { mount } from '@vue/test-utils';
import Vuex from 'vuex';
import { createVuexStore } from './utils';
import BsProductList from '~/presentation/components/Product/BsProductList.vue';

describe('Products Page', () => {
  let store;

  beforeEach(() => {
    store = createVuexStore({
      state: {
        products: [
          {
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            description:
              'The Great Gatsby is a novel by American writer F. Scott Fitzgerald.',
            price: 50000,
            stock: 100,
            image_url: 'https://m.media-amazon.com/images/I/61EtTpQI3vL._SL1360_.jpg',
          },
          {
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            description:
              'To Kill a Mockingbird is a novel by Harper Lee published in 1960.',
            price: 45000,
            stock: 100,
            image_url: 'https://m.media-amazon.com/images/I/51tDHl8Z7cL.jpg',
          },
        ],
        cart: [],
      },
      actions: {
        fetchProducts: vi.fn(),
        addToCart: vi.fn(),
      },
    });
  });

  test('show product list', async () => {
    const wrapper = mount(BsProductList, {
      props: {
        products: store.state.products,
      },
      global: {
        plugins: [[store, 'store']],
      },
    });

    expect(store.state.products.length).toBe(2);
    const products = wrapper.findAll('.productList__item');
    expect(products.length).toBe(2);
  });

  test('should have correct product card structure', () => {
    const wrapper = mount(BsProductList, {
      props: {
        products: [store.state.products],
      },
    });

    // Verify product card container exists
    const productCard = wrapper.find('.ProductCard');
    expect(productCard.exists()).toBe(true);

    // Verify all required elements are present
    const requiredElements = [
      { selector: '.ProductCard__figure', description: 'Product image container' },
      { selector: '.ProductCard__title', description: 'Product title' },
      { selector: '.ProductCard__price', description: 'Product price' },
      { selector: '.ProductCard__actions', description: 'Buy buttons' },
    ];

    requiredElements.forEach(({ selector, description }) => {
      const element = wrapper.find(selector);
      expect(element.exists(), `${description} should exist`).toBe(true);
    });
  });
});
