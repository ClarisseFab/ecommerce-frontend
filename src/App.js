import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductShow from './components/ProductShow';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShoppingCart from './components/ShoppingCart';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
