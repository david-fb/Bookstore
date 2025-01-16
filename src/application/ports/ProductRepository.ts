import type { Product } from '~/domain/entities/Product';

export interface ProductRepository {
  /**
   * Fetch a list of all products.
   * @returns A promise that resolves to an array of Product entities.
   */
  getAllProducts(): Promise<Product[]>;

  /**
   * Fetch a product by its ID.
   * @param id - The ID of the product to fetch.
   * @returns A promise that resolves to the Product entity.
   */
  getProductById(id: string): Promise<Product>;
}
