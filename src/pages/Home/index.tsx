import Wrapper from '../../components/Wrapper';

import Header from '../../layouts/Header';
import Intro from './components/Intro';

export default function Home() {
  return (
    <>
      <Wrapper>
        <Header />
      </Wrapper>

      <Wrapper customBackground={true}>
        <Intro />
      </Wrapper>
    </>
  );
}
