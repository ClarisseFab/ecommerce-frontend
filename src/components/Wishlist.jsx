import { useEffect, useState } from 'react';
import '../App.css';

function WishList() {

    const [wishlists, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    
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
        fetch(`${apiUrl}/wishlists`, requestOptions)
            .then(response => response.json())
            .then(function(data) {
                setWishlist(data)
        })
            .catch(function() {
                
        });
        }, []);
    
    
    const deleteOptions = {
        method: 'DELETE',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            'X-User-Email': process.env.REACT_APP_USER_EMAIL,
            'X-User-Token': process.env.REACT_APP_USER_TOKEN
        }
    };

    const deleteWish = (id) => {
        fetch(`${apiUrl}/wishlists/${id}`, deleteOptions)
            .then(response => response.json())
            .then(function(data) {
                console.log(data)
                setWishlist(data)
        })
            .catch(function() {
                
        });
    };

    return (
      wishlists.length === 0 ? (
        <p>Vous n'avez pas de randonnées préférées</p>
      ) : (
      <div className="wishlist">
           <h1>Mes randonnées préférées</h1>
           <ul>
            {
                wishlists.map(wishlist => (
                    <li key={wishlist.id}>
                        {wishlist.product.name} : {wishlist.product.price}€ 
                        <button type="button" onClick={() => deleteWish(wishlist.id)}>X</button>
                    </li>
                )
                )
            }
           </ul>
      </div>
      )
    );
  }
  
  export default WishList;