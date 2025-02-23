import { useEffect, useState } from 'react';
import '../App.css';
import Orders from './Orders';
import { TrashIcon} from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';

function ShoppingCart() {

    const [shoppingCarts, setShoppingCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false)
    // const [totalPrice, setTotalPrice] = useState(0);

    const notify = () => toast("Votre paiement a bien été pris en compte. C'EST PARTI POUR L'AVENTURE!");
    
    const apiUrl = process.env.REACT_APP_API_URL;
    
    const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            'X-User-Email': process.env.REACT_APP_USER_EMAIL,
            'X-User-Token': process.env.REACT_APP_USER_TOKEN
        }
    };
    
       useEffect(() => {
        fetch(`${apiUrl}/shopping_carts`, requestOptions)
            .then(response => response.json())
            .then(function(data) {
                setShoppingCart(data)
        })
            .catch(function() {
                
        });
        }, []);

        // A FAIRE : vider le panier
    
//   useEffect(() => {
//     if (shoppingCarts.length > 0) {
//       const total = shoppingCarts.reduce((sum, item) => sum + item.product.price, 0);
//       setTotalPrice(total);
//     } else {
//       setTotalPrice(0); 
//     }
//   }, [shoppingCarts]);
    const totalPrice = shoppingCarts.reduce((sum, item) => sum + item.product.price, 0);

    const shoppingCartProductsIds = shoppingCarts.map(shoppingCart => ({product_id: shoppingCart.product_id}))

    console.log(shoppingCartProductsIds)
   

    // const orderOptions = {
    //     method: 'POST',
    //     redirect: 'follow',
    //     headers: {
    //         "Content-Type": "application/json",
    //         'X-User-Email': process.env.REACT_APP_USER_EMAIL,
    //         'X-User-Token': process.env.REACT_APP_USER_TOKEN
    //     },
    //     body: JSON.stringify({total_price: totalPrice, date: new Date()})
    // };
    
    // const handleOrder = () => {
    //     fetch(`${apiUrl}/orders`, orderOptions)
    //         .then(response => response.json())
    //         .then(function(data) {
    //             setShoppingCart([])
    //     })
    //         .catch(function() {
                
    //     });
    // };

        const orderOptions = {
        method: 'DELETE',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            'X-User-Email': process.env.REACT_APP_USER_EMAIL,
            'X-User-Token': process.env.REACT_APP_USER_TOKEN
        },
        body: JSON.stringify({order: {total_price: totalPrice, date: new Date(), order_products_attributes: shoppingCartProductsIds}})
    };
    
    const handleOrder = () => {
        fetch(`${apiUrl}/shopping_carts/empty_shopping_cart`, orderOptions)
            .then(response => response.json())
            .then(function(data) {
                setShoppingCart([])
                // alert(data.message)
                notify()
        })
            .catch(function() {
                
        });
    };

    const deleteOptions = {
        method: 'DELETE',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            'X-User-Email': process.env.REACT_APP_USER_EMAIL,
            'X-User-Token': process.env.REACT_APP_USER_TOKEN
        }
    };

    const deleteCart = (id) => {
        fetch(`${apiUrl}/shopping_carts/${id}`, deleteOptions)
            .then(response => response.json())
            .then(function(data) {
                console.log(data)
                setShoppingCart(data)
        })
            .catch(function() {
                
        });
    };

    return (
        <div className="pt-3 bg-secondary-subtle" style={{ height: '1000px' }}>
            <div className='d-flex justify-content-between'>
                <h1 className='wishlist-title'>Mon panier</h1>
                <button type="button" onClick={() => setShowModal(true)} className='order-btn btn btn-secondary me-5'>Mes commandes</button>
            </div>
        
        {shoppingCarts.length === 0 ? (
        <p className='fst-italic empty'>Vous n'avez rien dans votre panier : retrouvez vos commandes passées en cliquant sur le bouton 'Mes commandes'- et, surtout - rejoignez nous vite pour l'aventure en réservant de nouvelles randonnées !</p>
     ) : (
      <div className="shopping-cart ">
           <div className='wishlist-content w-100 p-4 mt-4 container'>
            <ul >
                {
                    shoppingCarts.map(shoppingCart => (
                        <li key={shoppingCart.id} className='text-center mb-2 d-flex align-items-center justify-content-between border-bottom border-dark p-2'>
                            <div className='d-flex flex-column align-items-start'>
                                <p className='mb-1'><strong>{shoppingCart.product.name}</strong></p>
                                <p>{shoppingCart.product.price}€ </p>
                            </div>
                            {/* {shoppingCart.product.name} : {shoppingCart.product.price}€  */}
                            {/* <WishListCard name={shoppingCart.product.name} price={shoppingCart.product.price} quantity={shoppingCart.product.quantity}></WishListCard> */}
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
      </div>
     )}
     <div>

    {/* modal with list of orders TODO */}
    {showModal && (
        <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title" id="exampleModalLabel">Mes commandes passées</h2>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)} aria-label="Close"></button>
              </div>
              <div className="modal-body">
              <Orders></Orders>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Fermer</button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
    
 
     </div>
    );
  }
  
  export default ShoppingCart;
