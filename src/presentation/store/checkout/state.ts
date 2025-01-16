import type { Checkout } from '#build/imports';

export interface CheckoutState {
  checkout: Checkout;
}

export const state: CheckoutState = {
  checkout: {
    items: [],
    deliveryInfo: {
      name: '',
      email: '',
      address: '',
      city: '',
      department: '',
      phoneNumber: '',
      documentId: '',
      documentType: 'CC',
      completed: false,
    },
    paymentInfo: {
      cardNumber: '',
      cardholderName: '',
      cardMonth: '',
      cardYear: '',
      installments: 1,
      cvv: '',
      completed: false,
    },
    total: 0,
    quantityProducts: 0,
  },
};
