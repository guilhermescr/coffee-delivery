import { useNavigate } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';

import Cart from './components/Cart';

import CoffeeDeliveryLogo from 'src/assets/Images/logos/coffee-delivery-logo.svg';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between py-8">
      <img
        className="cursor-pointer"
        src={CoffeeDeliveryLogo}
        alt="Coffee Delivery Logo"
        onClick={() => navigate('/')}
      />

      <div className="flex gap-3 items-center justify-end">
        <p className="bg-[#EBE5F9] rounded-md p-2 flex gap-1 items-center justify-center w-max">
          <MdLocationOn className="text-[#8047F8] text-2xl" />{' '}
          <span className="text-[#4B2995] text-sm">Salvador, BA</span>
        </p>

        <Cart />
      </div>
    </header>
  );
}
