import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductShow from './components/ProductShow';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import WishList from './components/Wishlist';
import Orders from './components/Orders';
import Footer from './components/Footer';
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    // <div className="App">
    //   <ProductList></ProductList>
    // </div>

    <BrowserRouter>
      <div className="grid place-items-center h-dvh bg-zinc-900/15">
         <ToastContainer />
      </div>
    
      <Header></Header>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductShow />} />
        <Route path="/shopping_carts" element={<ShoppingCart />} />
        <Route path="/wishlists" element={<WishList />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
