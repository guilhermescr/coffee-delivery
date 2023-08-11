type Props = {
  type?: string;
  id: string;
  placeholder: string;
  width?: string;
};

export default function DeliveryAddressInput({
  type,
  id,
  placeholder,
  width,
}: Props) {
  return (
    <input
      type={type ?? 'text'}
      className={`bg-[#EDEDED] border border-solid border-[#E6E5E5] placeholder-[#8D8E8E] text-[#574F4D] rounded-[0.25rem] p-3 ${width}`}
      id={id}
      name={id}
      placeholder={placeholder}
    />
  );
}
