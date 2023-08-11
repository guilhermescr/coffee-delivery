import { MdOutlineLocationOn } from 'react-icons/md';
import { BiDollar } from 'react-icons/bi';

import DeliveryAddressForm from './DeliveryAddressForm';
import PaymentOptions from './PaymentOptions';
import FinishOrderSection from './FinishOrderSection';

export default function FinishOrder() {
  return (
    <section>
      <h2 className="mb-[0.94rem] text-lg">Finish your order</h2>

      <FinishOrderSection
        icon={<MdOutlineLocationOn className="text-[#C47F17] text-2xl" />}
        headingText="Delivery Address"
        headingDescription="Enter the address where you want to receive your order"
        customCSS="mb-3"
      >
        <DeliveryAddressForm />
      </FinishOrderSection>

      <FinishOrderSection
        icon={<BiDollar className="text-[#8047F8] text-2xl" />}
        headingText="Payment"
        headingDescription="Payment is made on delivery. Choose the way you want to pay"
      >
        <PaymentOptions />
      </FinishOrderSection>
    </section>
  );
}
