import {fireEvent,render, screen } from "@testing-library/react";
import Reservation, {initializeTimes} from '../../components/page/Reservation';
import React from 'react';

import { fetchAPI } from '../../components/utility/Utility';

jest.mock('../../components/utility/Utility', () => ({
  fetchAPI: jest.fn(),
}));

const mockDate = '2025-03-27';

jest.mock('../../components/page/reservation/BookingForm', () => ({ updateTimes, availableTimes }) => (
    <div>
      <button onClick={() => updateTimes('2025-03-27')}>Change Date</button>
    </div>
  ));

describe('Reservation.js', () => {
    test('Should render static item', async () => {
        render(
            <Reservation />
        )
        const headingElement = screen.getByText(/Book Now!/i);
        expect(headingElement).toBeInTheDocument();
    });
    test('initializeTimes should call fetchAPI with the current date and return the correct times', async () => {
        const mockUpdatedTimes = ["3:00", "4:00"];
        fetchAPI.mockResolvedValue(mockUpdatedTimes);

        const result = await initializeTimes();
        const today = new Date();
        const expectedISOString = today.toISOString().slice(0, -5);
        const actualISOString = fetchAPI.mock.calls[0][0].toISOString().slice(0, -5);

        expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
        expect(actualISOString).toEqual(expectedISOString);
        expect(result).toEqual(mockUpdatedTimes);
    });
    test('Should update available times when selectedDate is changed', async () => {
        const mockUpdatedTimes = ["3:00", "4:00"];
        fetchAPI.mockResolvedValue(mockUpdatedTimes);

        render(<Reservation />);

        const changeDateButton = screen.getByText('Change Date');
        fireEvent.click(changeDateButton);

        expect(fetchAPI).toHaveBeenCalledWith(mockDate);
      });
});