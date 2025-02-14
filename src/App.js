import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductShow from './components/ProductShow';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';
import WishList from './components/Wishlist';
import Orders from './components/Orders';

function App() {
  return (
    // <div className="App">
    //   <ProductList></ProductList>
    // </div>
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductShow />} />
        <Route path="/shopping_carts" element={<ShoppingCart />} />
        <Route path="/wishlists" element={<WishList />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
