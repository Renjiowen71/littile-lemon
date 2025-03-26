import Carousel from "./menu/Carousel"
import './Menu.css';

function Menu(){
    return(
        <>
            <section className="specials">
                <section className="section-header">
                    <h1>This Week Specials!!!</h1>
                </section>
                <Carousel/>
            </section>
        </>
    )
}
export default Menu