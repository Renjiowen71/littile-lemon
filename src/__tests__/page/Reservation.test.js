import { fireEvent, render, screen } from "@testing-library/react";
import Reservation, {initializeTimes, updateTimes} from '../../components/page/Reservation';
import React from 'react';
import { act } from 'react-dom/test-utils';
describe('Testing static render', () => {
    test('Renders the Reservation Page', () => {
        render(<Reservation />);
        const headingElement = screen.getByText("Book Now!");
        expect(headingElement).toBeInTheDocument();
    });
})

describe('Testing initializeTimes and updateTimes', () => {
    test('initializeTimes should return default available times', () => {
        const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
        const result = initializeTimes();
        expect(result).toEqual(expectedTimes);
    });

    test('updateTimes should dispatch correct available times based on the selected date', async () => {
        const mockDispatch = jest.fn();

        jest.spyOn(React, 'useReducer').mockImplementation(() => [{ availableTimes: [] }, mockDispatch]);

        render(<Reservation />);

        const dateInput = screen.getByLabelText(/Choose date:/i);
        await act(async () => {
            fireEvent.change(dateInput, { target: { value: '2025-03-29' } });
        });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'UPDATE_TIMES',
            payload: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]
        });

        await act(async () => {
            fireEvent.change(dateInput, { target: { value: '2025-03-31' } });
        });

        expect(mockDispatch).toHaveBeenCalledWith({
            type: 'UPDATE_TIMES',
            payload: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
        });
    });
});