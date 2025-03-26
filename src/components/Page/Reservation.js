import BookingForm from "./reservation/BookingForm";
import { useReducer } from "react";
import './Reservation.css';
import { fetchAPI } from "../utility/Utility";

export const initializeTimes = () => {
    const today = new Date();
    return fetchAPI(today);
};

const availableTimesReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            return { ...state, availableTimes: action.payload };
        default:
            return state;
    }
};

function Reservation(){
    const [state, dispatch] = useReducer(availableTimesReducer, { availableTimes: initializeTimes() });

    const updateTimes = (selectedDate) => {
        let updatedTimes = fetchAPI(selectedDate);
        dispatch({ type: 'UPDATE_TIMES', payload: updatedTimes });
    };

    return (
        <>
            <section className="reservation">
                <h1>Book Now!</h1>
                <BookingForm
                    availableTimes={state.availableTimes}
                    updateTimes={updateTimes}
                />
            </section>
        </>
    )
}

export default Reservation;