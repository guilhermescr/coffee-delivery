import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import DeliveryAddressInput from './DeliveryAddressInput';

const validationSchema = z.object({
  postCode: z
    .number()
    .min(5, { message: 'Minimum of 5 numbers' })
    .max(8, { message: 'Maximum of 8 numbers' }),
  street: z.string().min(2, { message: 'Street is required' }),
  number: z
    .number()
    .min(4, { message: 'Number must have 4 digits' })
    .max(4, { message: 'Number must have 4 digits' }),
  neighborhood: z.string().min(2, { message: 'Neighborhood is required' }),
  city: z.string().min(2, { message: 'City is required' }),
  state: z.string().min(2, { message: 'State is required' }),
});

export type ValidationSchema = z.infer<typeof validationSchema>;

export default function DeliveryAddressForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<ValidationSchema> = (data) => console.log(data);

  return (
    <form
      id="delivery-address-form"
      className="flex flex-col gap-4"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <DeliveryAddressInput
          id="postCode"
          type="number"
          placeholder="Post Code"
          width="w-full md:w-auto"
          validationObject={{ register, errors }}
        />
      </div>

      <div>
        <DeliveryAddressInput
          id="street"
          placeholder="Street"
          width="w-full"
          validationObject={{ register, errors }}
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <DeliveryAddressInput
          type="number"
          id="number"
          placeholder="Number"
          validationObject={{ register, errors }}
        />

        <DeliveryAddressInput
          id="complement"
          placeholder="Complement"
          width="w-full md:w-2/3"
          isOptional={true}
          validationObject={{ register, errors }}
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <DeliveryAddressInput
          id="neighborhood"
          placeholder="Neighborhood"
          width="w-full md:w-auto"
          validationObject={{ register, errors }}
        />

        <DeliveryAddressInput
          id="city"
          placeholder="City"
          width="w-full md:w-2/3"
          validationObject={{ register, errors }}
        />

        <DeliveryAddressInput
          id="state"
          placeholder="State"
          width="w-full md:w-1/3"
          validationObject={{ register, errors }}
        />
      </div>
    </form>
  );
}
