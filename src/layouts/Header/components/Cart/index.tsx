import { useNavigate } from 'react-router-dom';
import { useCartStore } from 'src/hooks/useCartStore';
import { FaShoppingCart } from 'react-icons/fa';

export default function Cart() {
  const { productsInCart } = useCartStore();
  const navigate = useNavigate();

  return (
    <button
      className="bg-[#F1E9C9] rounded-md p-2 relative"
      onClick={() => navigate('/checkout')}
    >
      {productsInCart.length > 0 && (
        <span className="bg-[#C47F17] text-white absolute -top-3 -right-3 rounded-[62.5rem] py-1 px-2 block font-bold text-xs">
          {productsInCart.length}
        </span>
      )}

      <FaShoppingCart className="text-[#C47F17] text-[1.375rem]" />
    </button>
  );
}
