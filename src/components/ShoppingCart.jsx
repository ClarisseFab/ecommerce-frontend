import { useEffect, useState } from 'react';
import '../App.css';

function ShoppingCart() {

    const [shoppingCarts, setShoppingCart] = useState([]);
    
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

    return (
      <div className="shopping-cart">
           <h1>Mon panier</h1>
           <ul>
            {
                shoppingCarts.map(shoppingCart => (
                    <li key={shoppingCart.id}>{shoppingCart.product.name} : {shoppingCart.product.price}€ </li>
                )

                )
            }
           </ul>
           <p>Prix total : </p>
           <button>Je valide mon panier !</button>
      </div>
    );
  }
  
  export default ShoppingCart;