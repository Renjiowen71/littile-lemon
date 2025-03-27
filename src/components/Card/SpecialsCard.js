import { Link } from "react-router-dom";
import delivery from '../../assets/delivery.png';
import './Card.css';
function SpecialsCard(props){
    const handleClick = (e) => {
        if (props.disabled) {
          e.preventDefault();
        }
    };

    return(
        <Link to="/order" onClick={handleClick} className="card" style={{
            pointerEvents: props.disabled ? 'none' : 'auto',
            ...props.style}}>
            <aside>
                <img src={props.item.img} alt="Food"/>
            </aside>
            <section className="card-title">
                <span className="food-name">{props.item.name}</span>
                <span className="food-price">${props.item.price.toFixed(2)}</span>
            </section>
            <section className="card-body">
                <p className="food-desc">{props.item.desc}</p>
            </section>
            <section className="card-footer">
                <span className="card-link">
                    Order a delivery
                    <img src={delivery} alt="Delivery Icon"/>
                </span>
            </section>
        </Link>
    )
}

export default SpecialsCard;