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
        </div>
      );
}
  
export default WishListCard;
