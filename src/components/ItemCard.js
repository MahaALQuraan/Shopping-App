import "../App.css";
import { useCart } from "react-use-cart";

function ItemCard(props) {
    const { addItem } = useCart();

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
            <div className="card p-0 overflow-hidden h-100 shadow">
                <img src={props.img} className="card-img-top" alt={props.title} />
                <div className="card-body text-center">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">Price: {props.price} $</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => addItem(props.item)} // Ensure props.item is valid
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;
