import Wrapper from 'src/components/Wrapper';
import FinishOrder from './components/FinishOrder';
import SelectedCoffeesMenu from './components/SelectedCoffeesMenu';

export default function Checkout() {
  return (
    <Wrapper customCSS="py-10">
      <section className="flex flex-col gap-4 lg:flex-row">
        <FinishOrder />

        <SelectedCoffeesMenu />
      </section>
    </Wrapper>
  );
}
