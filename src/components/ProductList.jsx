import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductList() {

    const [products, setProducts] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
   };

   useEffect(() => {
    fetch(`${apiUrl}/products`, requestOptions)
        .then(response => response.json())
        .then(function(data) {
            setProducts(data)
    })
        .catch(function() {
            
    });
    }, []);

  return (
    <div className="product-list">
            {
                products.map(product => (
                    <NavLink to={`/products/${product.id}`}>
                        <ProductCard name={product.name} price={product.price} duration={product.duration} period={product.period}></ProductCard>
                    </NavLink>
                ))
            }
    </div>
  );
}

export default ProductList;