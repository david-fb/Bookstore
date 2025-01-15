import type { ProductRepository } from '../../application/ports/ProductRepository';
import type { Product } from '../../domain/entities/Product';
import { useApi } from '@/composables/useApi';

export class ProductRepositoryImpl implements ProductRepository {
  async getAllProducts(): Promise<Product[]> {
    return useApi<Product[]>('/products');
  }
}
