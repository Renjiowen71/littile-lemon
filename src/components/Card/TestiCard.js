import './Card.css';
function TestiCard(props){
    return(
        <article className="testi-card">
            <section className="testi-card-title">
                <span className="rev">{props.item.rating}/10</span>
            </section>
            <section className="testi-card-body">
                <img src={props.item.img} alt='Potrait'/>
                <p className="rev">{props.item.name}</p>
            </section>
            <section className="testi-card-footer">
                <p className="rev-rev">{props.item.rev}</p>
            </section>
        </article>
    )
}

export default TestiCard;