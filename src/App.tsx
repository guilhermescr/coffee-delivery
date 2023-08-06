import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Wrapper from './components/Wrapper';
import Header from './layouts/Header';
import Home from './pages/Home';
import Checkout from './pages/Checkout';

function App() {
  const [isHeaderSticky, setIsHeaderSticky] = useState(false);

  document.addEventListener('scroll', () => {
    if (window.scrollY > 120) {
      setIsHeaderSticky(true);
    } else {
      setIsHeaderSticky(false);
    }
  });

  return (
    <Router>
      <Wrapper
        customCSS={
          isHeaderSticky ? 'bg-white fixed top-0 z-10' : 'bg-transparent'
        }
      >
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
