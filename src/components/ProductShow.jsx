import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { CalendarDaysIcon, ArrowTrendingUpIcon, RocketLaunchIcon, PhotoIcon, ClockIcon, HeartIcon, ShoppingCartIcon, CurrencyEuroIcon, ArrowLeftIcon} from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';

function ProductShow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const notify = () => toast("Super, vous avez bien ajouté cette randonnée à vos randonnées préférées !");

    const apiUrl = process.env.REACT_APP_API_URL;

    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    useEffect(() => {
      fetch(`${apiUrl}/products/${id}`, requestOptions)
          .then(response => response.json())
          .then(function(data) {
              setProduct(data)
              setLoading(false)
      })
          .catch(function() {
              
      });
      }, [id]);

    //   A FAIRE : GERER LA QUANTITE
      const cartRequestOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            'X-User-Email': process.env.REACT_APP_USER_EMAIL,
            'X-User-Token': process.env.REACT_APP_USER_TOKEN
        },
        body: JSON.stringify({product_id: id, quantity: 1})
      };

      const addToCart = () => {
        fetch(`${apiUrl}/shopping_carts`, cartRequestOptions)
          .then(response => response.json())
          .then(function(data) {
            navigate("/shopping_carts")
      })
          .catch(function() {
              
      });
      }

      const wishlistOptions = {
        method: 'POST',
        redirect: 'follow',
        headers: {
            "Content-Type": "application/json",
            'X-User-Email': process.env.REACT_APP_USER_EMAIL,
            'X-User-Token': process.env.REACT_APP_USER_TOKEN
        },
        body: JSON.stringify({product_id: id})
      };

      const addToWishlist = () => {
        fetch(`${apiUrl}/wishlists`, wishlistOptions)
          .then(response => response.json())
          .then(function(data) {
            notify()
            setProduct(prevProduct => ({
              ...prevProduct,
              wishlist: ['newItem'],
            }));
      })
          .catch(function() {
              
      });
      };

      return (
        loading ? (
            <p>Votre randonnée arrive !</p>
        ) : (
          <div className='bg-secondary-subtle' >
            <NavLink className="simple-link" to="/" ><ArrowLeftIcon className="icon icon-back"/></NavLink>

            <div class="d-flex flex-column align-items-center justify-content-center pt-3 pb-5 ">
              <div className="product-show d-flex justify-content-center container ">
                  <div>
                    <h1>{product.name}  <button className="btn-wish" onClick={() => addToWishlist()}> <HeartIcon className={product.wishlist.length === 1 ? 'icon-heart-full' : 'icon-heart'}/> </button></h1>
                    <p className='fst-italic'>{JSON.parse(product.description)[0]}</p>
                    <h2>Détails</h2>
                    <p className='details'><strong><RocketLaunchIcon className="icon"/>Difficulté</strong> : {product.difficulty}</p>
                    <p className='details'><strong><ClockIcon className="icon"/>Durée</strong> : {product.duration} jours</p>
                    <p className='details'><ArrowTrendingUpIcon className="icon"/><strong>Distance</strong> : {product.length}km</p>
                    <p className='details'><CalendarDaysIcon className="icon"/><strong>Période</strong> : {product.period} </p>
                    <p className='details'><strong><PhotoIcon className="icon"/>Lieu de départ</strong> : {product.departure_place}</p>
                    <h2 className='mt-4'>Prix <CurrencyEuroIcon className="icon"/></h2>
                    <div className='d-flex gap-3'>
                      <div className='price-card'><p>{product.price}€</p></div>
                      <button className="btn-book" onClick={() => addToCart()}>Je réserve <ShoppingCartIcon className="icon"/> </button>
                    </div>    
                  </div>
                  <div className="img-container"><img src={`http://localhost:3000${product.photo}`} alt="photo de la randonnée"></img></div>
              </div>
            </div>
          </div>
        )
    );
}

export default ProductShow;

