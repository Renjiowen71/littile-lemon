import{useState, useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import useSubmit from '../../../hooks/useSubmit';
import { useFormik } from "formik";
import * as Yup from 'yup';


function BookingForm({availableTimes, updateTimes}){
    const today = new Date().toISOString().split('T')[0];
    const navigate = useNavigate();
    const {isLoading, submit} = useSubmit();
    const [error, setError] = useState(null)

    const formik = useFormik({
        initialValues: {
            date: "",
            time: availableTimes[0],
            guests: 1,
            occation: "Birthday"
        },
        onSubmit: (values) => {
          submit("url", values)
            .then(() => {
                navigate("/reservation/confirmed");
                formik.resetForm();
            })
            .catch((error) => {
                setError(error)
            });
        },
        validationSchema: Yup.object({
            date: Yup.date()
                .required("Date is required"),
            guests: Yup.number()
                .required("Number of Guests is required"),
        }),
    });

    useEffect(() => {
        if (formik.values.date) {
            updateTimes(formik.values.date);
        }
    }, [formik.values.date, updateTimes]);


    return(
        <form onSubmit={formik.handleSubmit}>
        <fieldset>
            <section className="field-date">
                <label htmlFor='date' className='h3-like'>Choose date: </label>
                <input
                    id="date"
                    data-testid="date"
                    name='date'
                    type='date'
                    min={today}
                    className={`h3-like ${formik.errors.date && formik.touched.date ? 'invalid' : ''}`}
                    {...formik.getFieldProps("date")}
                />
            </section>
            <section className="field-time">
                <label htmlFor='time' className='h3-like'>Choose time: </label>
                <select
                    id="time"
                    name="time"
                    className='h3-like'
                    aria-label="Time selection"
                    {...formik.getFieldProps("time")}
                >
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
            </section>
            <section className="field-guest">
                <label htmlFor='guests' className='h3-like'>Number of guests: </label>
                <input
                    id="guests"
                    name="guests"
                    type='number'
                    className='h3-like'
                    aria-label="Number of guests"
                    {...formik.getFieldProps("guests")}
                />
            </section>
            <section className="field-occation">
                <label htmlFor='occation' className='h3-like'>Occation: </label>
                <select
                    id="occation"
                    name='occation'
                    className='h3-like'
                    {...formik.getFieldProps("occation")}
                    aria-label="Occation selection"
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </section>
            {error && (
                <section className='field-error'>
                    <label className='error'>{error}</label>
                </section>
            )}
            <button
                className='button'
                disabled={!(formik.isValid) || isLoading}
                type="submit"
                aria-label="Submit reservation form"
                >Submit</button>
        </fieldset>
    </form>
    )
}

export default BookingForm;