import Wrapper from '../../../../components/Wrapper';

import { FaShoppingCart } from 'react-icons/fa';
import { PiCoffeeFill, PiTimerLight } from 'react-icons/pi';
import { BiSolidPackage } from 'react-icons/bi';

import CoffeeIllustration from '../../../../assets/Images/illustrations/intro-illustration.svg';

export default function Intro() {
  const advantageIconStyles: string =
    'flex items-center justify-center p-2 text-white rounded-[62.5rem]';

  return (
    <Wrapper>
      <section className="flex flex-wrap items-center justify-between">
        <section className="content">
          <header className="max-w-xl mb-[4.12rem]">
            <h1 className="font-extrabold text-5xl mb-4">
              Find the perfect coffee for any time of the day
            </h1>

            <p className="text-xl">
              With Coffee Delivery, you get your coffee wherever you are,
              anytime.
            </p>
          </header>

          <section className="our-advantages grid grid-cols-2 gap-5 max-w-xl">
            <div className="advantage flex gap-3 items-center">
              <span className={`bg-[#C47F17] ${advantageIconStyles}`}>
                <FaShoppingCart />
              </span>{' '}
              Simple and secure purchase.
            </div>

            <div className="advantage flex gap-3 items-center">
              <span className={`bg-[#574F4D] ${advantageIconStyles}`}>
                <BiSolidPackage />
              </span>{' '}
              Packaging keeps the coffee intact.
            </div>

            <div className="advantage flex gap-3 items-center">
              <span className={`bg-[#DBAC2C] ${advantageIconStyles}`}>
                <PiTimerLight />
              </span>{' '}
              Fast and tracked delivery.
            </div>

            <div className="advantage flex gap-3 items-center">
              <span className={`bg-[#8047F8] ${advantageIconStyles}`}>
                <PiCoffeeFill />
              </span>{' '}
              Coffee arrives fresh to you.
            </div>
          </section>
        </section>

        <img
          src={CoffeeIllustration}
          alt="Illustration of a cup of coffee with coffee beans"
        />
      </section>
    </Wrapper>
  );
}
