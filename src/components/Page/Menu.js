import './Menu.css';
import DesertsMenu from './menu/DesertsMenu';
import MainsMenu from './menu/MainsMenu';
import SpecialsMenu from "./menu/SpecialsMenu";
import StartersMenu from './menu/StartersMenu';

function Menu(){
    return(
        <>
            <section className="specials">
                <SpecialsMenu/>
            </section>
            <section className="specials">
                <MainsMenu/>
            </section>
            <section className="specials">
                <StartersMenu/>
            </section>
            <section className="specials">
                <DesertsMenu/>
            </section>
        </>
    )
}
export default Menu