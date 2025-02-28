import { useEffect, useState } from 'react';
import '../App.css';
import { HeartIcon } from '@heroicons/react/24/outline';
import Wishlist from '../components/Wishlist';

function WishListIndex() {

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
                setWishlist(data)
        })
            .catch(function() {
                
        });
    };

    return (
        <div className="pt-3 bg-secondary-subtle" style={{ height: '1000px' }}>
            <h1 className='wishlist-title'>Mes randonnées préférées <HeartIcon className="icon-large"></HeartIcon></h1>
            {wishlists.length === 0 ? (
                <p className='empty fst-italic'>Vous n'avez pas encore de randonnées préférées, n'hésitez pas à laisser libre cours à vos rêves...</p>
            ) : (
                <>
                    <Wishlist wishlists={wishlists} deleteWish={deleteWish}></Wishlist>
                </>
            )}
        </div>
    );
  }
  
  export default WishListIndex;
