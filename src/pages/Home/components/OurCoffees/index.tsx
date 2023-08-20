import './index.css';

import Coffee from './components/Coffee';

import { CoffeeInterface } from 'src/interfaces/products/coffees';

import { useCartStore } from 'src/hooks/useCartStore';

export default function OurCoffees() {
  const coffees: CoffeeInterface[] = useCartStore().productsData;

  return (
    <section>
      <h2 className="text-[2rem] font-extrabold mt-8 mb-[3.38rem] text-center md:text-start lg:mt-0">
        Our coffees
      </h2>

      <section className="coffees gap-8">
        {coffees.map((coffee) => (
          <Coffee key={coffee.coffeeName + coffee.id} {...coffee} />
        ))}
      </section>
    </section>
  );
}
