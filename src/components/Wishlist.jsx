import ProductCard from "./ProductCard";

function Wishlist({deleteWish, wishlists}) {
    return (
        <ul className="product-list container">
            {
                wishlists.map(wishlist => (
                    <div key={wishlist.id} className='text-center mb-2'>
                        <ProductCard name={wishlist.product.name} price={wishlist.product.price} photo={wishlist.product.photo} deleteWish={() => deleteWish(wishlist.id)}>                                   
                        </ProductCard>
                    </div>
                ))
            }
    </ul>
    )
}

export default Wishlist