import { useState } from 'react';
import { PiCreditCard, PiBank, PiMoneyDuotone } from 'react-icons/pi';
import PaymentOption from './PaymentOption';

export default function PaymentOptions() {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState<
    string | null
  >(null);

  function selectPaymentOption(optionId: string) {
    setSelectedPaymentOption(optionId);
  }

  return (
    <section className="payment-options flex items-center gap-3">
      <PaymentOption
        paymentName="Credit Card"
        id="1"
        selectThisOption={selectPaymentOption}
        selectedOption={selectedPaymentOption}
      >
        <PiCreditCard className="text-[#8047F8]" />
      </PaymentOption>

      <PaymentOption
        paymentName="Debit Card"
        id="2"
        selectThisOption={selectPaymentOption}
        selectedOption={selectedPaymentOption}
      >
        <PiBank className="text-[#8047F8]" />
      </PaymentOption>

      <PaymentOption
        paymentName="Cash"
        id="3"
        selectThisOption={selectPaymentOption}
        selectedOption={selectedPaymentOption}
      >
        <PiMoneyDuotone className="text-[#8047F8]" />
      </PaymentOption>
    </section>
  );
}
