import { useState } from 'react';
import { PiTrash } from 'react-icons/pi';
import { useCartStore } from 'src/hooks/useCartStore';
import CounterForProductQuantity from 'src/pages/Home/components/OurCoffees/components/Coffee/CounterForProductQuantity';
import { convertDotToComma } from 'src/utilities';

type SelectedCoffeeProps = {
  id: number;
  imgSrc: string;
  coffeeName: string;
  amountInStock: number;
  price: number;
  isFirstCoffee: boolean;
};

export default function SelectedCoffee({
  id,
  imgSrc,
  coffeeName,
  amountInStock,
  price,
  isFirstCoffee = false,
}: SelectedCoffeeProps) {
  const { productsInCart, setAmountOfProducts, changeProductQuantity } =
    useCartStore();
  const selectedProduct = productsInCart.find(
    (productInCart) => productInCart.product.id === id
  )!;
  const [productQuantity, setProductQuantity] = useState(
    selectedProduct.quantity
  );

  function increaseProductQuantity() {
    if (productQuantity < amountInStock) {
      setProductQuantity(productQuantity + 1);
      changeProductQuantity(id, true);
      setAmountOfProducts();
    }
  }

  function decreaseProductQuantity() {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
      changeProductQuantity(id, false);
      setAmountOfProducts();
    }
  }

  function handleRemoveClick() {
    removeFromCart(id);
    setAmountOfProducts();
  }

  const { removeFromCart } = useCartStore();
  const coffeeMargin = isFirstCoffee ? 'mb-6' : 'my-6';

  return (
    <article
      className={`product flex justify-between gap-6 border-b border-solid border-[#E6E5E5] ${coffeeMargin} px-1 py-2`}
    >
      <div className="content flex items-center gap-5 pb-4">
        <img className="w-16" src={imgSrc} alt="Espresso" />

        <div>
          <h3
            style={{
              fontFamily: 'Roboto',
            }}
          >
            {coffeeName}
          </h3>

          <div className="actions grid grid-cols-2 gap-2 mt-2 w-40">
            <CounterForProductQuantity
              productQuantity={productQuantity}
              increaseProductQuantity={increaseProductQuantity}
              decreaseProductQuantity={decreaseProductQuantity}
            />

            <button
              className="bg-[#E6E5E5] flex items-center gap-1 p-2 rounded-md w-max"
              onClick={handleRemoveClick}
            >
              <span className="text-lg">
                <PiTrash className="text-[#8047F8]" />
              </span>{' '}
              <span className="text-xs uppercase text-[#574F4D]">Remove</span>
            </button>
          </div>
        </div>
      </div>

      <p className="price-box font-bold text-[#574F4D]">
        R${convertDotToComma(price * productQuantity)}
      </p>
    </article>
  );
}
