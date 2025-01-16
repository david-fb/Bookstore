import type { OrderRepository } from '~/application/ports/OrderRepository';
import type { Order, CreateOrder } from '~/domain/entities/Order';
import { useApi } from '@/composables/useApi';

export class OrderRepositoryImpl implements OrderRepository {
  async createOrder(order: CreateOrder): Promise<Order> {
    return useApi<Order>('/orders', {
      method: 'POST',
      body: JSON.stringify(order),
    });
  }
}
