import './DeliveryAddressInput.css';

type Props = {
  type?: string;
  id: string;
  placeholder: string;
  width?: string;
  isOptional?: boolean;
  validationObject: {
    register: any;
    errors: any;
  };
};

type ValidationPropOptions =
  | 'postCode'
  | 'street'
  | 'number'
  | 'neighborhood'
  | 'city'
  | 'state';

export default function DeliveryAddressInput({
  type,
  id,
  placeholder,
  width = '',
  isOptional = false,
  validationObject,
}: Props) {
  const inputStyles =
    'bg-[#EDEDED] border border-solid placeholder-[#8D8E8E] text-[#574F4D] rounded-[0.25rem] p-3';

  return isOptional ? (
    <span className={`optional ${width}`}>
      <input
        type={type ?? 'text'}
        className={`delivery-detail-item ${inputStyles} border-[#E6E5E5] w-full`}
        id={id}
        name={id}
        placeholder={placeholder}
        autoComplete="none"
      />
    </span>
  ) : (
    <>
      <input
        type={type ?? 'text'}
        className={`delivery-detail-item ${inputStyles} ${width} ${
          validationObject.errors[id as keyof typeof validationObject.errors]
            ? 'border-red-500'
            : 'border-[#E6E5E5]'
        }`.trim()}
        id={id}
        placeholder={placeholder}
        autoComplete="none"
        {...validationObject.register(id as ValidationPropOptions)}
      />
      {validationObject.errors[id as keyof typeof validationObject.errors] && (
        <p className="text-xs italic text-red-500 mt-2">
          {
            validationObject.errors[id as keyof typeof validationObject.errors]
              ?.message
          }
        </p>
      )}
    </>
  );
}
