import type { Order, CreateOrder } from '~/domain/entities/Order';

export interface OrderRepository {
  /**
 * Create a new order.
 * @param order - The order to be created.
 * @returns A promise that resolves to the created Order entity.
 */
  createOrder(order: CreateOrder): Promise<Order>;
}
