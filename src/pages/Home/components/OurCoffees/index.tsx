import './index.css';

import Coffee from './components/Coffee';

import { CoffeeInterface } from 'src/interfaces/products/coffees';

import coffeesData from '../../../../coffees.json';

export default function OurCoffees() {
  const coffees: CoffeeInterface[] = coffeesData;

  return (
    <section>
      <h2 className="text-[2rem] font-extrabold mt-8 mb-[3.38rem] text-center md:text-start lg:mt-0">
        Our coffees
      </h2>

      <section className="coffees gap-8">
        {coffees.map((coffee, index) => (
          <Coffee key={coffee.coffeeName + index * Math.random()} {...coffee} />
        ))}
      </section>
    </section>
  );
}
