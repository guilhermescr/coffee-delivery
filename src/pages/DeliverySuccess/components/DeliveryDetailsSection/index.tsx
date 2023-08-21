import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeliveryDetailsStore } from 'src/hooks/useDeliveryDetailsStore';

import { MdLocationPin } from 'react-icons/md';
import { PiTimerFill } from 'react-icons/pi';
import { BiDollar } from 'react-icons/bi';
import { isDeliveryDataComplete } from 'src/pages/Checkout';

export default function DeliveryDetailsSection() {
  const navigate = useNavigate();
  const { deliveryDetails } = useDeliveryDetailsStore();
  const { street, number, neighborhood, city, state, paymentMethod } =
    deliveryDetails;

  useEffect(() => {
    if (!isDeliveryDataComplete(deliveryDetails)) {
      navigate('/');
      setTimeout(() => {
        alert('Your data is not complete.');
      }, 500);
    }
  }, []);

  return (
    <section className="delivery-details rounded-tl-[0.375rem] rounded-tr-[2.25rem] rounded-br-[0.375rem] rounded-bl-[2.25rem] bg-gradient-to-l from-[#8047F8] to-[#DBAC2C] mt-10 p-[1px]">
      <div className="flex flex-col gap-8 h-full w-full items-center justify-center bg-white rounded-tl-[0.375rem] rounded-tr-[2.25rem] rounded-br-[0.375rem] rounded-bl-[2.25rem] p-10">
        <div className="delivery-detail flex items-center gap-3 w-full">
          <span className="bg-[#8047F8] inline-block p-2 rounded-full my-[0.31rem]">
            <MdLocationPin className="text-white text-xl" />
          </span>

          <div className="content text-[#574F4D]">
            <p>
              Delivery at{' '}
              <span className="font-bold">
                {street}, {number}
              </span>
            </p>
            <p>
              {neighborhood} - {city}, {state}
            </p>
          </div>
        </div>

        <div className="delivery-detail flex items-center gap-3 w-full">
          <span className="bg-[#DBAC2C] inline-block p-2 rounded-full my-[0.31rem]">
            <PiTimerFill className="text-white text-xl" />
          </span>

          <div className="content text-[#574F4D]">
            <p>Delivery Forecast</p>
            <p className="font-bold">20 min - 30 min</p>
          </div>
        </div>

        <div className="delivery-detail flex items-center gap-3 w-full">
          <span className="bg-[#C47F17] inline-block p-2 rounded-full my-[0.31rem]">
            <BiDollar className="text-white text-xl" />
          </span>

          <div className="content text-[#574F4D]">
            <p>Payment on delivery</p>
            <p className="font-bold">{paymentMethod}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
