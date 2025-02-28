import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Index from './views/products/index'
import CartIndex from './views/cartIndex'
import WishListIndex from './views/wishlistIndex';
import Header from './components/Header';
import ProductShow from './components/ProductShow';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="grid place-items-center h-dvh bg-zinc-900/15">
         <ToastContainer />
      </div>
    
      <Header></Header>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products/:id" element={<ProductShow />} />
        <Route path="/shopping_carts" element={<CartIndex />} />
        <Route path="/wishlists" element={<WishListIndex />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
