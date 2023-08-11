type Props = {
  productQuantity: number;
  decreaseProductQuantity: () => void;
  increaseProductQuantity: () => void;
};

export default function CounterForProductQuantity({
  productQuantity,
  decreaseProductQuantity,
  increaseProductQuantity,
}: Props) {
  return (
    <div className="counter bg-[#E6E5E5] flex items-center justify-center gap-3 p-2 rounded-md">
      <button
        className="text-[#8047F8] font-bold hover:text-[#4b259c]"
        onClick={decreaseProductQuantity}
      >
        &#x2013;
      </button>

      <span>{productQuantity}</span>

      <button
        className="text-[#8047F8] font-bold hover:text-[#4b259c]"
        onClick={increaseProductQuantity}
      >
        +
      </button>
    </div>
  );
}
