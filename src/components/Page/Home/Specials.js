import { Link } from "react-router-dom";
import SpecialsCardHolder from "../../card/SpecialsCardHolder";
function Specials(){
    return(
        <>
            <section className="section-header">
                <h2>This Week Specials!!!</h2>
                <Link to="/menu" className='button'>Online Menu</Link>
            </section>
            <SpecialsCardHolder/>
        </>
    )
}
export default Specials;