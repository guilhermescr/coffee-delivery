import DeliveryAddressInput from './DeliveryAddressInput';

export default function DeliveryAddressForm() {
  return (
    <form className="flex flex-col gap-4">
      <div>
        <DeliveryAddressInput
          id="postCode"
          placeholder="Post Code"
          width="w-full md:w-auto"
        />
      </div>

      <div>
        <DeliveryAddressInput id="street" placeholder="Street" width="w-full" />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <DeliveryAddressInput type="number" id="number" placeholder="Number" />

        <DeliveryAddressInput
          id="complement"
          placeholder="Complement"
          width="w-full md:w-2/3"
        />
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <DeliveryAddressInput id="neighborhood" placeholder="Neighborhood" width='w-full md:w-auto' />

        <DeliveryAddressInput
          id="city"
          placeholder="City"
          width="w-full md:w-2/3"
        />

        <DeliveryAddressInput
          id="state"
          placeholder="State"
          width="w-full md:w-1/3"
        />
      </div>
    </form>
  );
}
