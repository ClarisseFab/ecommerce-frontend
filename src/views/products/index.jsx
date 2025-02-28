import ProductList from "../../components/ProductList";
import Banner from "../../components/Banner";

function Index() {
    return (
        <div className="pt-3">
            <h1 className="wishlist-title">Toutes nos randonnées</h1>
            <Banner/>
            <ProductList/>
        </div>
    )
}

export default Index;