import { Link } from "react-router-dom";

function ConfirmReservation(){
    return (
        <section>
            <section style={{display: "block"}}>
                <h3>Reservation is confirmed, We will email you shortly</h3>
                <Link to="/" className='button'>Home</Link>
            </section>
        </section>
    )
}

export default ConfirmReservation;