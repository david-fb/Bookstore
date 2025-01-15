import type { ProductRepository } from '../ports/ProductRepository';

export const getProductList = async (productRepo: ProductRepository) => {
  return await productRepo.getAllProducts();
};
