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
           <ul>
            {
                orders.map(order => (
                    <div key={order.id}>
                        <h6 className='d-flex justify-content-between align-items-center'><strong>Le {order.date}:</strong><span className='border rounded bg-success p-1 text-white fs-5'>Payée</span></h6>
                        <p className='mb-0'>{order.order_products.length} article(s)</p>
                        <p >{order.total_price}€</p>
                    </div>
                )
                )
            }
           </ul>
      </div>
    );
  }
  
  export default Orders;