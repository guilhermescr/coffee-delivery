import { PiTrash } from 'react-icons/pi';

import Espresso from 'src/assets/Images/coffees/expresso-tradicional.png';
import { useCartStore } from 'src/hooks/useCartStore';
import SelectedCoffee from './SelectedCoffee';
import { convertDotToComma } from 'src/utilities';

export default function SelectedCoffeesMenu() {
  const { productsInCart } = useCartStore();

  return (
    <section className="w-full lg:w-2/3">
      <h2 className="mb-[0.94rem] text-lg">Selected Coffees</h2>

      <section className="bg-[#F3F2F2] rounded-tr-[2.75rem] rounded-bl-[2.75rem] rounded-s-md rounded-br-md p-6 lg:p-10">
        <section className="products">
          {productsInCart.map(({ quantity, product }, index) => (
            <SelectedCoffee
              key={product.id}
              id={product.id}
              imgSrc={product.coffeeSrc}
              coffeeName={product.coffeeName}
              quantity={quantity}
              price={convertDotToComma(product.price)}
              isFirstCoffee={index === 0}
            />
          ))}
        </section>

        <section className="prices flex flex-col gap-3">
          <p className="flex items-center justify-between">
            <span className="text-sm text-[#574F4D]">Total Items</span>{' '}
            <span className="text-[#574F4D]">R$19,80</span>
          </p>

          <p className="flex items-center justify-between">
            <span className="text-sm text-[#574F4D]">Shipping Price</span>{' '}
            <span className="text-[#574F4D]">R$5,80</span>
          </p>

          <p className="flex items-center justify-between">
            <span className="text-[#403937] text-xl font-bold">Total</span>

            <span className="text-[#403937] text-xl font-bold">R$25,60</span>
          </p>
        </section>

        <button className="bg-[#DBAC2C] rounded-md uppercase text-sm font-bold text-white mt-6 py-3 px-2 w-full hover:saturate-150 active:opacity-90">
          Finish Order
        </button>
      </section>
    </section>
  );
}
