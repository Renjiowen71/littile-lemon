import BookingForm from "./reservation/BookingForm";
import { useReducer } from "react";
import './Reservation.css';

export const initializeTimes = () => {
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
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
        let updatedTimes = [];

        const dayOfWeek = new Date(selectedDate).getDay();

        if (dayOfWeek === 0 || dayOfWeek === 6) {
            updatedTimes = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
        } else {
            updatedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        }
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