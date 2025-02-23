import { useEffect, useState } from 'react';
import '../App.css';
import WishListCard from './WishlistCard';
import { HeartIcon, TrashIcon} from '@heroicons/react/24/outline';

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
        <div className="pt-3 bg-secondary-subtle" style={{ height: '500px' }}>
            <h1 className='wishlist-title'>Mes randonnées préférées <HeartIcon className="icon-large"></HeartIcon></h1>
            {wishlists.length === 0 ? (
                <p className='empty fst-italic'>Vous n'avez pas encore de randonnées préférées, n'hésitez pas à laisser libre cours à vos rêves...</p>
            ) : (
                <>
                    <ul className="wishlist-content m-auto p-2 wishlist-list ">
                        {
                            wishlists.map(wishlist => (
                                <div key={wishlist.id} className='text-center mb-2'>
                                    <WishListCard name={wishlist.product.name} price={wishlist.product.price} photo={wishlist.product.photo}></WishListCard>
                                    <button type="button" className="btn btn-outline-dark" onClick={() => deleteWish(wishlist.id)}><TrashIcon className="icon"/></button>
                                </div>
                            ))
                        }
                    </ul>
                </>
            )}
        </div>
    );
  }
  
  export default WishList;
