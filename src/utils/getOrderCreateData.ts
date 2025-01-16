import type { Checkout } from './getCheckoutType';
import type { CreateOrder } from '~/domain/entities/Order';

export const getOrderCreateData = (data: Checkout): CreateOrder => {
  return {
    items: data.items.map(item => ({
      productId: item.id,
      quantity: item.quantity,
    })),
    deliveryInfo: {
      address: data.deliveryInfo.address,
      city: data.deliveryInfo.city,
      department: data.deliveryInfo.department,
      contactNumber: data.deliveryInfo.phoneNumber,
      email: data.deliveryInfo.email,
      name: data.deliveryInfo.name,
    },
    paymentInfo: {
      card: {
        cardHolder: data.paymentInfo.cardholderName,
        paymentMethod: 'Credit Card',
        cardNumber: data.paymentInfo.cardNumber,
        expiryMonth: data.paymentInfo.cardMonth,
        expiryYear: data.paymentInfo.cardYear,
        cvv: data.paymentInfo.cvv,
      },
      customerEmail: data.deliveryInfo.email,
      installments: data.paymentInfo.installments,
    },
  };
};

export default getOrderCreateData;
