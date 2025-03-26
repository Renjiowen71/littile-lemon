import Carousel from "./menu/Carousel"
import './Menu.css';

function Menu(){
    return(
        <>
            <section className="specials">
                <section className="section-header">
                    <h2>This Week Specials!!!</h2>
                </section>
                <Carousel/>
            </section>
        </>
    )
}
export default Menu