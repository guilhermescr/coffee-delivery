import { create } from 'zustand';

import { CoffeeInterface } from 'src/interfaces/products/coffees';
import { ProductInCart } from 'src/interfaces/products/productInCart';

import coffeesData from 'src/coffees.json';

interface Cart {
  amountOfProducts: number;
  productsData: CoffeeInterface[];
  productsInCart: ProductInCart[];
  addToCart: (product: ProductInCart) => void;
  removeFromCart: (productId: number) => void;
  emptyCart: () => void;
}

export const useCartStore = create<Cart>((set) => ({
  amountOfProducts: 0,
  productsData: coffeesData,
  productsInCart: [],
  addToCart: (productToBeAddedToCart: ProductInCart) => {
    set((state) => {
      const isProductAlreadyInCart = !!state.productsInCart.find(
        (productInCart) =>
          productInCart.product.id === productToBeAddedToCart.product.id
      );

      if (!isProductAlreadyInCart) {
        return {
          productsInCart: [...state.productsInCart, productToBeAddedToCart],
        };
      } else {
        const updatedProductsInCart = state.productsInCart.map(
          (productInCart) => {
            if (
              productInCart.product.id === productToBeAddedToCart.product.id
            ) {
              return {
                quantity:
                  productInCart.quantity + productToBeAddedToCart.quantity,
                product: productInCart.product,
              };
            } else {
              return productInCart;
            }
          }
        );

        return { productsInCart: updatedProductsInCart };
      }
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
