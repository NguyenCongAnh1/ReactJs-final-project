import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/dashboard';
import MovieDetail from './components/detail/movieDetail';
import XeDay from './components/xeDay/xeday';
import Home from './components/home';
import { CartProvider } from './store/contextApi/cartContext';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="/home" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route index element={<Home />} />
            <Route path="/cart" element={<XeDay />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
