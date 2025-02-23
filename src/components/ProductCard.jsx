import '../App.css';

function ProductCard({name, price, duration, period, photo}) {
    return (
      <div className="card-container rounded">
            <img src={`http://localhost:3000${photo}`} />
            <div className="card-infos">
                <div>
                <h2>{name}</h2>
                <p>{duration} jours</p>
                <p>{period}</p>
                </div>
                <h2 className="card-pricing">{price}€</h2>
            </div>
      </div>
    );
  }
  
  export default ProductCard;