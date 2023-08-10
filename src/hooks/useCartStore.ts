import { create } from 'zustand';

import { CoffeeInterface } from '../interfaces/products/coffees';

import coffeesData from 'src/coffees.json';

interface Cart {
  productsData: CoffeeInterface[];
  productsInCart: CoffeeInterface[];
  addToCart: (product: CoffeeInterface) => void;
  removeFromCart: (productId: number) => void;
  emptyCart: () => void;
}

export const useCartStore = create<Cart>((set) => ({
  productsData: coffeesData,
  productsInCart: [],
  addToCart: (product: CoffeeInterface) => {
    set((state) => ({ productsInCart: [...state.productsInCart, product] }));
  },
  removeFromCart: (productId) => {
    set((state) => ({
      productsInCart: state.productsInCart.filter(
        (product) => product.id !== productId
      ),
    }));
  },
  emptyCart: () => {
    set({ productsInCart: [] });
  },
}));
