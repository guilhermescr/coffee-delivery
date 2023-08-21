import { create } from 'zustand';
import { DeliveryDetails } from 'src/interfaces/deliveryDetails';

interface DeliveryData {
  deliveryDetails: DeliveryDetails;
  setDeliveryDetails: (deliveryData: DeliveryDetails) => void;
}

export const useDeliveryDetailsStore = create<DeliveryData>((set) => ({
  deliveryDetails: {
    postCode: '',
    street: '',
    number: 0,
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    paymentMethod: '',
  },
  setDeliveryDetails: (deliveryData: DeliveryDetails) => {
    set(() => {
      return { deliveryDetails: deliveryData };
    });
  },
}));
