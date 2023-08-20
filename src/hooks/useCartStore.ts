import { create } from 'zustand';

import { CoffeeInterface } from 'src/interfaces/products/coffees';
import { ProductInCart } from 'src/interfaces/products/productInCart';

import coffeesData from 'src/coffees.json';

interface Cart {
  amountOfProducts: number;
  productsData: CoffeeInterface[];
  productsInCart: ProductInCart[];
  addToCart: (product: ProductInCart) => void;
  setAmountOfProducts: () => void;
  changeProductQuantity: (productId: number, isIncreaseType: boolean) => void;
  removeFromCart: (productId: number) => void;
  emptyCart: () => void;
}

export function getAmountOfProductsInCart(productsInCart: ProductInCart[]) {
  return productsInCart.reduce((accumulator, productInCart) => {
    return accumulator + productInCart.quantity;
  }, 0);
}

function isProductInCart(state: Cart, productId: number): boolean {
  return !!state.productsInCart.find(({ product: { id } }) => id === productId);
}

export const useCartStore = create<Cart>((set) => ({
  amountOfProducts: 0,
  productsData: coffeesData,
  productsInCart: [],
  addToCart: (productToBeAddedToCart: ProductInCart) => {
    set((state) => {
      const isProductAlreadyInCart = isProductInCart(
        state,
        productToBeAddedToCart.product.id
      );

      if (!isProductAlreadyInCart) {
        return {
          productsInCart: [...state.productsInCart, productToBeAddedToCart],
        };
      } else {
        const updatedProductsInCart = state.productsInCart.map(
          (productInCart) => {
            if (isProductInCart(state, productToBeAddedToCart.product.id)) {
              return {
                quantity:
                  productInCart.quantity + productToBeAddedToCart.quantity,
                product: productInCart.product,
              };
            }
            return productInCart;
          }
        );

        return { productsInCart: updatedProductsInCart };
      }
    });
  },
  setAmountOfProducts: () => {
    set((state) => {
      return {
        amountOfProducts: getAmountOfProductsInCart(state.productsInCart),
      };
    });
  },
  changeProductQuantity: (productId: number, isIncreaseType: boolean) => {
    set((state) => {
      const updatedProductsInCart = state.productsInCart.map(
        (productInCart) => {
          if (productInCart.product.id === productId) {
            const quantity = isIncreaseType
              ? productInCart.quantity + 1
              : productInCart.quantity - 1;
            return {
              quantity,
              product: productInCart.product,
            };
          }
          return productInCart;
        }
      );

      return { productsInCart: updatedProductsInCart };
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      productsInCart: state.productsInCart.filter(
        (productInCart) => productInCart.product.id !== productId
      ),
    }));
  },
  emptyCart: () => {
    set({ productsInCart: [] });
  },
}));
