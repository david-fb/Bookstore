import type { Product } from '~/domain/entities/Product';

export interface ProductRepository {
  /**
   * Fetch a list of all products.
   * @returns A promise that resolves to an array of Product entities.
   */
  getAllProducts(): Promise<Product[]>;
}
