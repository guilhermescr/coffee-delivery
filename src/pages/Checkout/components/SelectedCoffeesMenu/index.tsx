import { useState, useEffect } from 'react';

import { convertDotToComma } from 'src/utilities';
import { useCartStore } from 'src/hooks/useCartStore';
import SelectedCoffee from './SelectedCoffee';

type Props = {
  handleSubmit: () => void;
};

export default function SelectedCoffeesMenu({ handleSubmit }: Props) {
  const { productsInCart } = useCartStore();
  const [totalItemsPrice, setTotalItemsPrice] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const shippingPrice = 5.8;

  useEffect(() => {
    getTotalPrices();

    useCartStore.subscribe(() => {
      setTimeout(getTotalPrices, 500);
    });
  }, []);

  function getTotalPrices() {
    let totalItemsPriceValue = getTotalItemsPrice();

    setTotalItemsPrice(totalItemsPriceValue);
    setTotalPrice(totalItemsPriceValue + shippingPrice);
  }

  function getTotalItemsPrice() {
    const totalItemsPriceValue = [
      ...document.querySelectorAll('.price-box'),
    ].reduce((accumulator, priceBox) => {
      const price = Number(
        priceBox.innerHTML.replace('R$', '').replace(',', '.')
      );
      return accumulator + price;
    }, 0);

    return totalItemsPriceValue;
  }

  return (
    <section className="w-full lg:w-[40%]">
      <h2 className="mb-[0.94rem] text-lg">Selected Coffees</h2>

      <section className="bg-[#F3F2F2] rounded-tr-[2.75rem] rounded-bl-[2.75rem] rounded-s-md rounded-br-md p-6 lg:p-10">
        <section className="products">
          {productsInCart.map(({ product }, index) => (
            <SelectedCoffee
              key={product.id}
              id={product.id}
              imgSrc={product.coffeeSrc}
              coffeeName={product.coffeeName}
              amountInStock={product.amountInStock}
              price={product.price}
              isFirstCoffee={index === 0}
            />
          ))}
        </section>

        <section className="prices flex flex-col gap-3">
          <p className="flex items-center justify-between">
            <span className="text-sm text-[#574F4D]">Total Items</span>{' '}
            <span className="text-[#574F4D]">
              R${convertDotToComma(totalItemsPrice)}
            </span>
          </p>

          <p className="flex items-center justify-between">
            <span className="text-sm text-[#574F4D]">Shipping Price</span>{' '}
            <span className="text-[#574F4D]">
              R${convertDotToComma(shippingPrice)}
            </span>
          </p>

          <p className="flex items-center justify-between">
            <span className="text-[#403937] text-xl font-bold">Total</span>

            <span className="text-[#403937] text-xl font-bold">
              R${convertDotToComma(totalPrice)}
            </span>
          </p>
        </section>

        <button
          className="bg-[#DBAC2C] rounded-md uppercase text-sm font-bold text-white mt-6 py-3 px-2 w-full hover:saturate-150 active:opacity-90"
          onClick={handleSubmit}
        >
          Finish Order
        </button>
      </section>
    </section>
  );
}
