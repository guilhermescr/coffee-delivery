// import Wrapper from '../../../../components/Wrapper';

import CoffeeIllustration from '../../../../assets/Images/illustrations/intro-illustration.svg';

export default function Intro() {
  return (
    <section>
      <header>
        <h1>Find the perfect coffee for any time of the day</h1>
      </header>

      <img
        src={CoffeeIllustration}
        alt="Illustration of a cup of coffee with coffee beans"
      />
    </section>
  );
}
