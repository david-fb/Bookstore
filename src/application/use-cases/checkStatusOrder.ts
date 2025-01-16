import type { OrderRepository } from '../ports/OrderRepository';
import type { CreateOrder } from '../../domain/entities/Order';
import { getProductById } from './getProductById';
import { ProductRepositoryImpl } from '~/infrastructure/repositories/ProductRepositoryImpl';

export const createOrder = async (orderRepo: OrderRepository, order: CreateOrder) => {
  const productRepo = new ProductRepositoryImpl();
  for (const item of order.items) {
    if (item.quantity < 1) {
      throw new Error('La cantidad debe ser mayor a 0');
    }
    const product = await getProductById(productRepo, item.productId);
    if (item.quantity > product.stock) {
      throw new Error(`No hay suficiente stock para el producto ${product.title}`);
    }
  }

  return await orderRepo.createOrder(order);
};

export const checkStatusOrder = async (orderRepo: OrderRepository, orderId: string) => {
  return await orderRepo.checkStatusOrder(orderId);
};
