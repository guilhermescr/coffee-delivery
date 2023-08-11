import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  paymentName: string;
  id: string;
  selectThisOption: (optionId: string) => void;
  selectedOption: string | null;
};

export default function PaymentOption({
  children,
  paymentName,
  id,
  selectThisOption,
  selectedOption,
}: Props) {
  const paymentOptionCustomStyles =
    selectedOption === id
      ? 'bg-[#EBE5F9] border border-solid border-[#8047F8]'
      : 'bg-[#E6E5E5]';

  function handleClick() {
    selectThisOption(id);
  }

  return (
    <button
      className={`${paymentOptionCustomStyles} flex items-center rounded-md transition-all p-4 w-full md:w-1/3`}
      id={id}
      onClick={handleClick}
    >
      {children}{' '}
      <span className="inline-block ml-3 text-[#574F4D] text-xs uppercase">
        {paymentName}
      </span>
    </button>
  );
}
