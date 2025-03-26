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
});