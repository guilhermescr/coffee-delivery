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
// come back
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

 

  return (
    <Wrapper customCSS="py-10">
      <section className="flex flex-col gap-4 lg:flex-row">
        <FinishOrder />

        <SelectedCoffeesMenu />
      </section>
    </Wrapper>
  );
}
