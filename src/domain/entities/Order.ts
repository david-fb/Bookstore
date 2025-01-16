import type { Product } from './Product';

export class OrderItem {
  constructor(
    public id: string,
    public orderId: string,
    public productId: string,
    public quantity: number,
    public price: string,
    public product: Product,
  ) {}
}

export class Order {
  constructor(
    public id: string,
    public totalAmount: string,
    public status: string,
    public address: string,
    public city: string,
    public department: string,
    public contactNumber: string,
    public name: string,
    public email: string,
    public payment_gateway_id: string,
    public createdAt: string,
    public updatedAt: string,
    public items: OrderItem[],
  ) {}
}

export class CreateOrder {
  constructor(
    public items: { productId: string; quantity: number }[],
    public deliveryInfo: {
      address: string;
      city: string;
      department: string;
      contactNumber: string;
      email: string;
      name: string;
    },
    public paymentInfo: {
      card: {
        cardHolder: string;
        paymentMethod: string;
        cardNumber: string;
        expiryMonth: string;
        expiryYear: string;
        cvv: string;
      };
      customerEmail: string;
      installments: number;
    },
  ) {}
}
