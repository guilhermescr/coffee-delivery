import { PiTrash } from 'react-icons/pi';
import { useCartStore } from 'src/hooks/useCartStore';

type SelectedCoffeeProps = {
  id: number;
  imgSrc: string;
  coffeeName: string;
  quantity: number;
  price: string;
  isFirstCoffee: boolean;
};

export default function SelectedCoffee({
  id,
  imgSrc,
  coffeeName,
  quantity,
  price,
  isFirstCoffee = false,
}: SelectedCoffeeProps) {
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

          <div className="actions grid grid-cols-2 mt-2 w-40">
            <div className="counter bg-[#E6E5E5] flex items-center justify-center gap-3 p-2 rounded-md max-w-max">
              <button className="text-[#8047F8] font-bold hover:text-[#4b259c]">
                &#x2013;
              </button>

              <span>{quantity}</span>

              <button className="text-[#8047F8] font-bold hover:text-[#4b259c]">
                +
              </button>
            </div>

            <button
              className="bg-[#E6E5E5] flex items-center gap-1 p-2 rounded-md"
              onClick={() => removeFromCart(id)}
            >
              <PiTrash className="text-[#8047F8]" />{' '}
              <span className="text-xs uppercase text-[#574F4D]">Remove</span>
            </button>
          </div>
        </div>
      </div>

      <p className="font-bold text-[#574F4D]">R${price}</p>
    </article>
  );
}
