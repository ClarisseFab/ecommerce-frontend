import { TrashIcon} from '@heroicons/react/24/outline';

function WishListCard({name, price, photo, quantity}) {
    const containerClass = photo ? "card-container" : "card-container-without-photo";

    return (
        <div className={`${containerClass} rounded`}>
            {photo && (
              <img src={`http://localhost:3000${photo}`}/>)}
              <div className="card-infos">
                  <div>
                  <p className='text-reset text-decoration-none'>{name}</p>
                  </div>
                  <p className="card-pricing">{price}€</p>
                {quantity && (
                    <p className="card-pricing">{quantity}</p>
                )}
              </div>
              <button type="button" className="btn btn-outline-dark" onClick={() => deleteWish(wishlist.id)}><TrashIcon className="icon"/></button>
        </div>
      );
}
  
export default WishListCard;
