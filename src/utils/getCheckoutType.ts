import type { Product } from '~/domain/entities/Product';

export class DeliveryInfo {
  constructor(
    public name: string,
    public email: string,
    public address: string,
    public city: string,
    public department: string,
    public phoneNumber: string,
    public documentId: string,
    public documentType: string,
    public completed: boolean,
  ) {}
}

export class PaymentInfo {
  constructor(
    public cardNumber: string,
    public cardholderName: string,
    public cardMonth: string,
    public cardYear: string,
    public installments: number,
    public cvv: string,
    public completed: boolean,
  ) {}
}

export class Checkout {
  constructor(
    public items: (Product & { quantity: number })[],
    public total: number,
    public deliveryInfo: DeliveryInfo,
    public paymentInfo: PaymentInfo,
    public quantityProducts: number,
  ) {}
}
