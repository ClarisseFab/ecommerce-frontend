import '../App.css';

function ProductCard({name, price, duration, period}) {
    return (
      <div className="card-container">
            <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg" />
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