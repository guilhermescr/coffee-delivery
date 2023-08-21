import { useNavigate } from 'react-router-dom';
import { DeliveryDetails } from 'src/interfaces/deliveryDetails';

import Wrapper from 'src/components/Wrapper';
import FinishOrder from './components/FinishOrder';
import SelectedCoffeesMenu from './components/SelectedCoffeesMenu';
import { useDeliveryDetailsStore } from 'src/hooks/useDeliveryDetailsStore';
import { useCartStore } from 'src/hooks/useCartStore';

export function isDeliveryDataComplete(deliveryData: DeliveryDetails): boolean {
  const deliveryDataProps = Object.keys(deliveryData).filter(
    (data) => data !== 'complement'
  );

  const deliveryDataResults = deliveryDataProps.map((deliveryDataProp) => {
    const deliveryDataItem =
      deliveryData[deliveryDataProp as keyof typeof deliveryData];

    return deliveryDataItem ? 'valid' : 'invalid';
  });

  // "invalid is not included" means delivery data is complete
  return !deliveryDataResults.includes('invalid');
}

export default function Checkout() {
  const navigate = useNavigate();
  const { emptyCart } = useCartStore();
  const { setDeliveryDetails } = useDeliveryDetailsStore();

  function getElementText(element: any) {
    if (element instanceof HTMLInputElement) {
      return element.value;
    } else {
      return element.innerHTML;
    }
  }

  function handleSubmit() {
    const deliveryDetails: DeliveryDetails = {
      postCode: '',
      street: '',
      number: 1,
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: '',
    };

    document
      .querySelectorAll('.delivery-detail-item')
      .forEach((deliveryDetailItem) => {
        const deliveryDetailData: string = getElementText(deliveryDetailItem);

        switch (deliveryDetailItem.id) {
          case 'postCode':
            deliveryDetails.postCode = deliveryDetailData;
            break;
          case 'street':
            deliveryDetails.street = deliveryDetailData;
            break;
          case 'number':
            deliveryDetails.number = Number(deliveryDetailData);
            break;
          case 'complement':
            deliveryDetails.complement = deliveryDetailData;
            break;
          case 'neighborhood':
            deliveryDetails.neighborhood = deliveryDetailData;
            break;
          case 'city':
            deliveryDetails.city = deliveryDetailData;
            break;
          case 'state':
            deliveryDetails.state = deliveryDetailData;
            break;
          default:
            deliveryDetails.paymentMethod = deliveryDetailData;
        }
      });

    if (isDeliveryDataComplete(deliveryDetails)) {
      setDeliveryDetails(deliveryDetails);
      emptyCart();

      navigate('/delivery-success');
    } else {
      alert('You forgot to add some data in the input fields.');
    }
  }

  return (
    <Wrapper customCSS="py-10">
      <section className="flex flex-col gap-4 lg:flex-row">
        <FinishOrder />

        <SelectedCoffeesMenu handleSubmit={handleSubmit} />
      </section>
    </Wrapper>
  );
}
