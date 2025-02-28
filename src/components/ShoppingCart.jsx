import { TrashIcon} from '@heroicons/react/24/outline';

function ShoppingCart({shoppingCarts, totalPrice, handleOrder, deleteCart}) {
    return (
        <div className='wishlist-content w-100 p-4 mt-4 container'>
            <ul >
                {
                    shoppingCarts.map(shoppingCart => (
                        <li key={shoppingCart.id} className='text-center mb-2 d-flex align-items-center justify-content-between border-bottom border-dark p-2'>
                            <div className='d-flex flex-column align-items-start'>
                                <p className='mb-1 p-big'><strong>{shoppingCart.product.name}</strong></p>
                                <p>{shoppingCart.product.price}€ </p>
                            </div>
                                   
                            <div className='d-flex gap-3 align-items-center'>
                                <p className='mb-0'> <strong>{shoppingCart.product.quantity || 1}</strong></p>
                                <button type="button"  className="btn btn-outline-dark p-1" onClick={() => deleteCart(shoppingCart.id)}><TrashIcon className="icon"/></button>
                             </div>
                            <p><strong>{shoppingCart.product.price}€ </strong></p>
                        </li>
                        )
                    )
                }
            </ul>
            <div className='d-flex flex-column align-items-end '>
                <p style={{ fontSize: '24px' }}><strong>Prix total : {totalPrice}€ </strong></p>
                <button type="button" className="btn btn-success" onClick={() => handleOrder()}>Procéder au paiement</button>
            </div>
        </div>
    )
}

export default ShoppingCart