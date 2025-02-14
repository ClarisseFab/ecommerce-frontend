import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductShow() {
  const { id } = useParams();
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true);
  const [cartClicked, setCart] = useState(false)

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
        body: JSON.stringify({product_id: id})
      };

      const addToCart = () => {
        fetch(`${apiUrl}/shopping_carts`, cartRequestOptions)
          .then(response => response.json())
          .then(function(data) {
      })
          .catch(function() {
              
      });
      }

      return (
        loading ? (
            <p>Votre randonnée arrive !</p>
        ) : (
            <div className="ProductShow">
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <h2>Détails</h2>
                <p>Difficulté : {product.difficulty}</p>
                <p>Durée : {product.duration} jours</p>
                <button className="btn btn-primary" onClick={addToCart}>Je réserve cette rando</button>
                <button className="btn btn-primary">J'ajoute cette rando à mes favoris</button>
            </div>
        )
    );
}

export default ProductShow;