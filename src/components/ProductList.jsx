import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";

function ProductList({products}) {

  return (
    <div className="product-list container">
            {
                products.map(product => (
                    <NavLink to={`/products/${product.id}`} className="text-decoration-none">
                        <ProductCard name={product.name} price={product.price} duration={product.duration} period={product.period} photo={product.photo}></ProductCard>
                    </NavLink>
                ))
            }
    </div>
  );
}

export default ProductList;