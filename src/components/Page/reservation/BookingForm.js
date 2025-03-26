import{useState, useEffect} from 'react';
import useSubmit from '../../../hooks/useSubmit';


function BookingForm({availableTimes, updateTimes}){
    const {isLoading, response, submit} = useSubmit();
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        guests: 1,
        occation: "Birthday"
    });

    useEffect(() => {
        if (formData.date) {
            updateTimes(formData.date);
        }
    }, [formData.date, updateTimes]);

    const handleSubmit = (e) => {
        e.preventDefault();
        submit("url", formData)
        .then(() => {
            alert(response.type+", "+response.message)
            if(response.type==="success"){
                setFormData({
                    date: "",
                    time: "",
                    guests: 1,
                    occation: "Birthday"
                });
            }
        })
        .catch(() => {
            alert(response.type+", "+response.message);
        });
    }

    return(
        <form onSubmit={handleSubmit}>
        <fieldset>
            <section className="fieldDate">
                <label htmlFor='date'>Choose date: </label>
                <input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={e => setFormData({...formData, [e.target.id]: e.target.value})}
                />
            </section>
            <section className="fieldTime">
                <label htmlFor='time'>Choose time: </label>
                <select
                    id="time"
                    value={formData.time}
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
                <label htmlFor='guests'>Number of guests: </label>
                <input
                    id="guests"
                    type="number"
                    min={1}
                    value={formData.guests}
                    onChange={e => setFormData({...formData, [e.target.id]: e.target.value})}
                />
            </section>
            <section className="fieldOccation">
                <label htmlFor='occation'>Occation: </label>
                <select
                    id="occation"
                    value={formData.occation}
                    onChange={e => setFormData({...formData, [e.target.id]: e.target.value})}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </section>
            <button disabled={!formData.date || !formData.time || isLoading} type="submit">Submit</button>
        </fieldset>
    </form>
    )
}

export default BookingForm;