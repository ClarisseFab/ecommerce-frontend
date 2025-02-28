import { TrashIcon} from '@heroicons/react/24/outline';

function ShoppingCart({shoppingCarts, setShoppingCart, totalPrice, handleOrder, deleteCart, firstTotalPrice}) {

    const increaseQuantity = (shoppingCart) => {
        console.log(shoppingCart)
        const updatedCart = {
            ...shoppingCart,
            quantity: shoppingCart.quantity + 1 
        };
        setShoppingCart(prevState => 
            prevState.map(item => 
                item.id === updatedCart.id 
                    ? updatedCart  
                    : item  
            )
        );
    };

    return (
        <div className='wishlist-content w-100 p-4 mt-4 container'>
            <ul >
                {
                    shoppingCarts.map(shoppingCart => (
                        <li key={shoppingCart.id} className='text-center mb-2 d-flex align-items-center justify-content-between border-bottom border-dark p-2'>
                            <div className='d-flex flex-column align-items-start'>
                                <p className='mb-1 p-big'><strong>{shoppingCart.product.name}</strong></p>
                                <p>{shoppingCart.product.price }€ </p>
                            </div>
                                   
                            <div className='d-flex gap-3 align-items-center'>
                                <p className='mb-0'> <strong>{shoppingCart.quantity || 1}</strong></p>
                                <button type="button"  className="btn btn-outline-dark p-1" onClick={() => increaseQuantity(shoppingCart)}>+</button>

                                <button type="button"  className="btn btn-outline-dark p-1" onClick={() => deleteCart(shoppingCart.id)}><TrashIcon className="icon-trash"/></button>
                             </div>
                            <p><strong>{shoppingCart.quantity ? shoppingCart.product.price * shoppingCart.quantity : shoppingCart.product.price }€ </strong></p>
                        </li>
                        )
                    )
                }
            </ul>
            <div className='d-flex flex-column align-items-end '>
                <p style={{ fontSize: '24px' }}><strong>Prix total : {totalPrice === 0 ? firstTotalPrice : totalPrice }€ </strong></p>
                <button type="button" className="btn btn-success" onClick={() => handleOrder()}>Procéder au paiement</button>
            </div>
        </div>
    )
}

export default ShoppingCart