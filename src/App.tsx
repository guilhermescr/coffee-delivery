import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Wrapper from './components/Wrapper';
import Header from './layouts/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
      </Wrapper>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
