import './DeliveryAddressInput.css';

type Props = {
  type?: string;
  id: string;
  placeholder: string;
  width?: string;
  isOptional?: boolean;
};

export default function DeliveryAddressInput({
  type,
  id,
  placeholder,
  width = '',
  isOptional,
}: Props) {
  const inputStyles =
    'bg-[#EDEDED] border border-solid border-[#E6E5E5] placeholder-[#8D8E8E] text-[#574F4D] rounded-[0.25rem] p-3';

  return isOptional ? (
    <span className={`optional ${width}`}>
      <input
        type={type ?? 'text'}
        className={`delivery-detail-item ${inputStyles} w-full`}
        id={id}
        name={id}
        placeholder={placeholder}
        autoComplete="none"
      />
    </span>
  ) : (
    <input
      type={type ?? 'text'}
      className={`delivery-detail-item ${inputStyles} ${width}`.trim()}
      id={id}
      name={id}
      placeholder={placeholder}
      autoComplete="none"
    />
  );
}
