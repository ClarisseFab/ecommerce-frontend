import { useEffect, useState } from 'react';
import '../App.css';

function ShoppingCart() {

    const [shoppingCarts, setShoppingCart] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [totalPrice, setTotalPrice] = useState(0);
    
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

    const orderOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            'X-User-Email': process.env.REACT_APP_USER_EMAIL,
            'X-User-Token': process.env.REACT_APP_USER_TOKEN
        },
        body: JSON.stringify({total_price: totalPrice, date: new Date()})
    };
    
    const handleOrder = () => {
        fetch(`${apiUrl}/orders`, orderOptions)
            .then(response => response.json())
            .then(function(data) {
                setShoppingCart([])
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
        shoppingCarts.length === 0 ? (
        <p>Vous n'avez rien dans votre panier : vite, rejoignez nous pour l'aventure !</p>
     ) : (
      <div className="shopping-cart">
           <h1>Mon panier</h1>
           <ul>
            {
                shoppingCarts.map(shoppingCart => (
                    <li key={shoppingCart.id}>
                        {shoppingCart.product.name} : {shoppingCart.product.price}€ 
                        <button type="button" onClick={() => deleteCart(shoppingCart.id)}>X</button>
                    </li>
                )

                )
            }
           </ul>
           <p>Prix total : {totalPrice}€ </p>
           <button type="button" onClick={() => handleOrder()}>Je valide mon panier !</button>
      </div>
     )
    );
  }
  
  export default ShoppingCart;