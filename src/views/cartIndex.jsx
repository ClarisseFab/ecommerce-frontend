import { useEffect, useState } from 'react';
import '../App.css';
import { toast } from 'react-toastify';
import Modal from '../components/Modal';
import ShoppingCart from '../components/ShoppingCart';

function cartIndex() {

    const [shoppingCarts, setShoppingCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false)

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

    const firstTotalPrice = shoppingCarts.reduce((sum, item) => sum + item.product.price, 0);
    const totalPrice = shoppingCarts.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    const shoppingCartProductsIds = shoppingCarts.map(shoppingCart => ({product_id: shoppingCart.product_id}))

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
                     <ShoppingCart shoppingCarts={shoppingCarts} setShoppingCart={setShoppingCart} totalPrice={totalPrice} handleOrder={handleOrder} deleteCart={deleteCart} firstTotalPrice={firstTotalPrice}></ShoppingCart>
                </div>
             )}
        <div>

        {showModal && (
            <Modal setShowModal={setShowModal} ></Modal>
         )}

        {showModal && <div className="modal-backdrop fade show blurred"></div>}

        </div>
     </div>
    );
  }
  
  export default cartIndex;
