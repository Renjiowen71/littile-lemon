import{useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import useSubmit from '../../../hooks/useSubmit';


function BookingForm({availableTimes, updateTimes}){
    const navigate = useNavigate();
    const {isLoading, response, submit} = useSubmit();
    const [formData, setFormData] = useState({
        date: "",
        time: availableTimes[0],
        guests: 1,
        occation: "Birthday"
    });

    useEffect(() => {
        if (formData.date) {
            updateTimes(formData.date);
        }
    }, [formData.date]);

    const handleSubmit = (e) => {
        e.preventDefault();
        submit("url", formData)
        .then(() => {
            navigate("/reservation/confirmed");
        })
        .catch((error) => {
            alert("Error, "+error.message);
        });
    }

    return(
        <form onSubmit={handleSubmit}>
        <fieldset>
            <section className="fieldDate">
                <label htmlFor='date' className='h3-like'>Choose date: </label>
                <input
                    id="date"
                    type="date"
                    className='h3-like'
                    value={formData.date}
                    onChange={e => setFormData({...formData, [e.target.id]: e.target.value})}
                />
            </section>
            <section className="fieldTime">
                <label htmlFor='time' className='h3-like'>Choose time: </label>
                <select
                    id="time"
                    value={formData.time}
                    className='h3-like'
                    onChange={e => setFormData({...formData, [e.target.id]: e.target.value})}
                >
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </section>
            <section className="fieldGuest">
                <label htmlFor='guests' className='h3-like'>Number of guests: </label>
                <input
                    id="guests"
                    type="number"
                    min={1}
                    className='h3-like'
                    value={formData.guests}
                    onChange={e => setFormData({...formData, [e.target.id]: e.target.value})}
                />
            </section>
            <section className="fieldOccation">
                <label htmlFor='occation' className='h3-like'>Occation: </label>
                <select
                    id="occation"
                    className='h3-like'
                    value={formData.occation}
                    onChange={e => setFormData({...formData, [e.target.id]: e.target.value})}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </section>
            <button disabled={!formData.date || !formData.time || isLoading} type="submit" className='button'>Submit</button>
        </fieldset>
    </form>
    )
}

export default BookingForm;