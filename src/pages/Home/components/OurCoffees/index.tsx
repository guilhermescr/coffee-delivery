import './index.css';

import Coffee from './components/Coffee';

import { CoffeeInterface } from '../../../../interfaces/products/coffees';

import Espresso from '../../../../assets/Images/coffees/expresso-tradicional.svg';
import AmericanEspresso from '../../../../assets/Images/coffees/expresso-americano.svg';
import CreamyEspresso from '../../../../assets/Images/coffees/expresso-cremoso.svg';
import IcedEspresso from '../../../../assets/Images/coffees/expresso-gelado.svg';
import CoffeeWithMilk from '../../../../assets/Images/coffees/café-com-leite.svg';
import Latte from '../../../../assets/Images/coffees/latte.svg';
import Capuccino from '../../../../assets/Images/coffees/capuccino.svg';
import Macchiato from '../../../../assets/Images/coffees/macchiato.svg';
import Mocaccino from '../../../../assets/Images/coffees/mocaccino.svg';
import HotChocolate from '../../../../assets/Images/coffees/chocolate-quente.svg';
import Cuban from '../../../../assets/Images/coffees/cubano.svg';
import Hawaiian from '../../../../assets/Images/coffees/havaiano.svg';
import Arabic from '../../../../assets/Images/coffees/árabe.svg';
import Irish from '../../../../assets/Images/coffees/irlandês.svg';

export default function OurCoffees() {
  const coffees: CoffeeInterface[] = [
    {
      coffeeSrc: Espresso,
      coffeeName: 'Espresso',
      description: 'Traditional coffee made with hot water and ground beans',
      tags: ['Traditional'],
      price: 9.9,
    },
    {
      coffeeSrc: AmericanEspresso,
      coffeeName: 'American Espresso',
      description: 'Diluted espresso, less intense than the traditional one',
      tags: ['Traditional'],
      price: 9.9,
    },
    {
      coffeeSrc: CreamyEspresso,
      coffeeName: 'Creamy Espresso',
      description: 'Traditional espresso with creamy foam',
      tags: ['Traditional'],
      price: 9.9,
    },
    {
      coffeeSrc: IcedEspresso,
      coffeeName: 'Iced Espresso',
      description: 'Drink prepared with espresso coffee and ice cubes',
      tags: ['Traditional', 'Iced'],
      price: 9.9,
    },
    {
      coffeeSrc: CoffeeWithMilk,
      coffeeName: 'Coffee With Milk',
      description: 'Half and half traditional espresso with steamed milk',
      tags: ['Traditional', 'With Milk'],
      price: 9.9,
    },
    {
      coffeeSrc: Latte,
      coffeeName: 'Latte',
      description: 'A shot of espresso with much milk and creamy foam',
      tags: ['Traditional', 'With Milk'],
      price: 9.9,
    },
    {
      coffeeSrc: Capuccino,
      coffeeName: 'Capuccino',
      description: 'Cinnamon drink made of coffee, milk and foam',
      tags: ['Traditional', 'With Milk'],
      price: 9.9,
    },
    {
      coffeeSrc: Macchiato,
      coffeeName: 'Macchiato',
      description: 'Espresso coffee mixed with a little hot milk and foam',
      tags: ['Traditional', 'With Milk'],
      price: 9.9,
    },
    {
      coffeeSrc: Mocaccino,
      coffeeName: 'Mocaccino',
      description: 'Coffee with chocolate sauce, milk and foam',
      tags: ['Traditional', 'With Milk'],
      price: 9.9,
    },
    {
      coffeeSrc: HotChocolate,
      coffeeName: 'Hot Chocolate',
      description: 'Chocolate dissolved in hot milk and coffee',
      tags: ['Special', 'With Milk'],
      price: 9.9,
    },
    {
      coffeeSrc: Cuban,
      coffeeName: 'Cuban',
      description: 'Iced espresso drink with rum, cream and mint',
      tags: ['Special', 'Alcoholic', 'Iced'],
      price: 9.9,
    },
    {
      coffeeSrc: Hawaiian,
      coffeeName: 'Hawaiian',
      description: 'Sweet drink prepared with coffee and coconut milk',
      tags: ['Special'],
      price: 9.9,
    },
    {
      coffeeSrc: Arabic,
      coffeeName: 'Arabic',
      description: 'Drink prepared with Arabic coffee beans and spices',
      tags: ['Special'],
      price: 9.9,
    },
    {
      coffeeSrc: Irish,
      coffeeName: 'Irish',
      description: 'Drink of coffee, Irish whiskey, sugar and whipped cream',
      tags: ['Special', 'Alcoholic'],
      price: 9.9,
    },
  ];

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
