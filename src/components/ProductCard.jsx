import '../App.css';
import { TrashIcon} from '@heroicons/react/24/outline';

function ProductCard({name, price, duration, period, photo, quantity, deleteWish}) {
    return (
      <div className="card-container rounded">
            {photo && (
              <img src={`http://localhost:3000${photo}`}/>)}
              <div className="card-infos">
                  <div>
                  <h2>{name}</h2>
                  {duration && (
                    <p>{duration} jours</p>
                  )}
                  {period && (
                    <p>{period}</p>
                  )}
                  </div>
                  <h2 className="card-pricing">{price}€</h2>
                {quantity && (
                    <p className="card-pricing">{quantity}</p>
                )}
              </div>
              {deleteWish && (
              <div className='d-flex justify-content-end p-2'><button type="button" className="btn btn-outline-dark text-right" onClick={deleteWish} ><TrashIcon className="icon"/></button></div>
              )}
        </div>
    );
  }
  
  export default ProductCard;