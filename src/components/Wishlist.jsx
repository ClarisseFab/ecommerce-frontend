import { NavLink } from "react-router-dom";
import ProductCard from "./ProductCard";

function Wishlist({deleteWish, wishlists}) {
    return (
        <ul className="product-list container">
            {
                wishlists.map(wishlist => (
                    <div key={wishlist.id} className='text-center mb-2'>
                        <NavLink to={`/products/${wishlist.product_id}`} className="text-decoration-none" key={wishlist.product_id}>
                            <ProductCard name={wishlist.product.name} price={wishlist.product.price} photo={wishlist.product.photo} deleteWish={() => deleteWish(wishlist.id)}>                                   
                            </ProductCard>
                        </NavLink>
                    </div>
                ))
            }
    </ul>
    )
}

export default Wishlist
