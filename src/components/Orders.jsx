import { useEffect, useState } from 'react';
import '../App.css';

function Orders() {

    const [orders, setOrder] = useState([]);
    
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
        fetch(`${apiUrl}/orders`, requestOptions)
            .then(response => response.json())
            .then(function(data) {
                setOrder(data)
        })
            .catch(function() {
                
        });
        }, []);

    return (
      <div className="order">
           <h1>Mes commandes passées</h1>
           <ul>
            {
                orders.map(order => (
                    <li key={order.id}>le {order.date}: {order.total_price}€  </li>
                )
                )
            }
           </ul>
      </div>
    );
  }
  
  export default Orders;