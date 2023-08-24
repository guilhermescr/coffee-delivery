export interface DeliveryDetails {
  postCode: number;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: string;
}

export type DeliveryDetailsProps =
  | 'postCode'
  | 'street'
  | 'number'
  | 'complement'
  | 'neighborhood'
  | 'city'
  | 'state';
