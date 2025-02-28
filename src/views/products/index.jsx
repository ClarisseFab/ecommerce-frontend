import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";
import { useEffect, useState } from "react";

function Index() {

    const [products, setProducts] = useState([]);

    const apiUrl = process.env.REACT_APP_API_URL;

    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
   };

   useEffect(() => {
    fetch(`${apiUrl}/products`, requestOptions)
        .then(response => response.json())
        .then(function(data) {
            setProducts(data)
    })
        .catch(function() {
            
    });
    }, []);

    return (
        <div className="pt-3">
            <h1 className="wishlist-title">Toutes nos randonnées</h1>
            <Banner/>
            <ProductList products={products}/>
        </div>
    )
}

export default Index;