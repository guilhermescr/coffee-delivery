import Wrapper from 'src/components/Wrapper';
import Advantage from './components/Advantage';

import { FaShoppingCart } from 'react-icons/fa';
import { PiCoffeeFill, PiTimerFill } from 'react-icons/pi';
import { BiSolidPackage } from 'react-icons/bi';

import CoffeeIllustration from 'src/assets/Images/illustrations/intro-illustration.png';

export default function Intro() {
  const styles = {
    introSection:
      'flex flex-wrap gap-8 items-center justify-between min-h-[calc(100vh-6.5rem)] md:gap-4 lg:flex-nowrap',
    header: {
      styles: 'max-w-xl mb-6 md:mb-[4.12rem]',
      h1: 'font-extrabold leading-[130%] text-3xl mb-2 md:mb-4 md:text-5xl md:leading-[130%]',
      p: 'text-lg max-w-md md:text-xl',
    },
    ourAdvantages:
      'our-advantages grid grid-cols-1  gap-5 max-w-xl md:grid-cols-2',
    illustration: 'mx-auto w-3/4 md:max-w-xs lg:max-w-md lg:mx-0',
  };

  return (
    <Wrapper>
      <section className={styles.introSection}>
        <section className="content">
          <header className={styles.header.styles}>
            <h1 className={styles.header.h1}>
              Find the perfect coffee for any time of the day
            </h1>

            <p className={styles.header.p}>
              With Coffee Delivery, you get your coffee wherever you are,
              anytime.
            </p>
          </header>

          <section className={styles.ourAdvantages}>
            <Advantage
              backgroundColor="#C47F17"
              advantageDescription="Simple and secure purchase."
            >
              <FaShoppingCart />
            </Advantage>

            <Advantage
              backgroundColor="#574F4D"
              advantageDescription="Packaging keeps the coffee intact."
            >
              <BiSolidPackage />
            </Advantage>

            <Advantage
              backgroundColor="#DBAC2C"
              advantageDescription="Fast and tracked delivery."
            >
              <PiTimerFill />
            </Advantage>

            <Advantage
              backgroundColor="#8047F8"
              advantageDescription="Coffee arrives fresh to you."
            >
              <PiCoffeeFill />
            </Advantage>
          </section>
        </section>

        <img
          className={styles.illustration}
          src={CoffeeIllustration}
          alt="Illustration of a cup of coffee with coffee beans"
        />
      </section>
    </Wrapper>
  );
}
