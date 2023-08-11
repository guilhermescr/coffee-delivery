import Wrapper from 'src/components/Wrapper';

import Intro from './components/Intro';
import OurCoffees from './components/OurCoffees';

export default function Home() {
  return (
    <>
      <Wrapper customCSS="relative" customBackground={true}>
        <Intro />
      </Wrapper>

      <Wrapper customCSS="pb-[9.81rem]">
        <OurCoffees />
      </Wrapper>
    </>
  );
}
