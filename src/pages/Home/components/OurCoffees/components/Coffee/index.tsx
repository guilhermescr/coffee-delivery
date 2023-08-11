import { useState } from 'react';
import { CoffeeInterface } from 'src/interfaces/products/coffees';
import { convertDotToComma } from 'src/utilities';

import { FaShoppingCart } from 'react-icons/fa';
import { useCartStore } from 'src/hooks/useCartStore';
import CounterForProductQuantity from './CounterForProductQuantity';

export default function Coffee({
  id,
  coffeeSrc,
  coffeeName,
  description,
  tags,
  price = 9.9,
  quantity,
}: CoffeeInterface) {
  const [productQuantity, setProductQuantity] = useState(1);
  const { productsData, addToCart } = useCartStore();

  function increaseProductQuantity() {
    if (productQuantity < quantity) {
      setProductQuantity(productQuantity + 1);
    }
  }

  function decreaseProductQuantity() {
    if (productQuantity > 1) {
      setProductQuantity(productQuantity - 1);
    }
  }

  function addProductToCart() {
    for (let index = 0; index < productQuantity; index++) {
      const product = productsData.find((productData) => productData.id === id);

      if (product) {
        addToCart(product);
      }
    }
  }

  console.log(coffeeSrc);
  return (
    <article
      className="bg-[#F3F2F2] flex flex-col items-center justify-between pt-20 pb-5 px-4 relative"
      style={{
        borderRadius: '0.375rem 2.25rem',
      }}
    >
      <img
        className="absolute left-1/2 -top-4 -translate-x-1/2 w-24"
        src={coffeeSrc}
        alt={description}
      />

      <div className="tags flex items-center justify-center gap-1 mt-4 mb-4">
        {tags.map((tag, index) => (
          <span
            key={tag + index * Math.random()}
            className="bg-[#F1E9C9] text-[#C47F17] text-[0.625rem] font-bold rounded-[6.25rem] py-1 px-2"
          >
            {tag.toUpperCase()}
          </span>
        ))}
      </div>

      <h3 className="text-xl">{coffeeName}</h3>

      <p className="text-[#8D8686] text-sm text-center mt-2">{description}</p>

      <div className="buy flex gap-4 items-center justify-between mt-[2.06rem]">
        <div>
          <p className="text-sm text-[#574F4D] inline-block">R$</p>
          <h4 className="text-2xl text-[#574F4D] font-extrabold inline-block ml-1">
            {convertDotToComma(price)}
          </h4>
        </div>

        <div className="actions flex items-center gap-2">
          <CounterForProductQuantity
            productQuantity={productQuantity}
            decreaseProductQuantity={decreaseProductQuantity}
            increaseProductQuantity={increaseProductQuantity}
          />

          <button
            className="bg-[#4B2995] p-2 text-white rounded-md"
            onClick={addProductToCart}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </article>
  );
}
