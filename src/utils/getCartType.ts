import type { Product } from '~/domain/entities/Product';

export class Cart {
  constructor(
    public items: (Product & { quantity: number })[],
    public open: boolean,
  ) {}
}
