import type { ProductRepository } from '../ports/ProductRepository';

export const getProductById = async (productRepo: ProductRepository, id: string) => {
  return await productRepo.getProductById(id);
};
