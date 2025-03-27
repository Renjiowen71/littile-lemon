import {fireEvent, render, screen, waitFor, act } from "@testing-library/react";
import BookingForm from '../../../components/page/reservation/BookingForm';
import { useNavigate } from 'react-router-dom';
import '../../../components/page/Reservation.css';
import React from 'react';
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));
const availableTimes = ["1:00","2:00"];
const updateTimes = jest.fn();
const mockDate = "2025-03-26";

describe('BookingForm.js', () => {
  test('Should render static item', async () => {
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>)
    const label1 = screen.getByText(/Choose date:/i);
    const label2 = screen.getByText(/Choose time:/i);
    const label3 = screen.getByText(/Number of guests:/i);
    const label4 = screen.getByText(/Occation:/i);
    expect(label2).toBeInTheDocument();
    expect(label1).toBeInTheDocument();
    expect(label3).toBeInTheDocument();
    expect(label4).toBeInTheDocument();

    availableTimes.forEach(time => {
      expect(screen.getByText(time)).toBeInTheDocument();
    });

    const buttons = screen.getAllByText(/Submit/i);
    expect(buttons[0]).toBeInTheDocument();
  });
  test('Should change border color of date input to red when blured', async () => {
    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>)
    const dateInput = screen.getByTestId('date');
    await act(async () => {
      fireEvent.click(dateInput);
      fireEvent.blur(dateInput);
    });
    expect(dateInput).toHaveClass('invalid');;
  });
  test('Should change border color of date input to red when click submit and date is empty', async () => {

    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>)

    const dateInput = screen.getByTestId('date');
    const button = screen.getAllByText(/Submit/i)[0];
    await act(async () => {
      fireEvent.click(button);
    });
    expect(dateInput).toHaveClass('invalid');;
  });
  test('Should call updateTimes when date changed', async () => {

    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>)

    const dateInput = screen.getByTestId('date');
    await act(async () => {
      fireEvent.change(dateInput, { target: { value: mockDate } });
    });
    expect(updateTimes).toHaveBeenCalledWith(mockDate);
  });
  test('Should navigate to /reservation/confirmed when success', async () => {
    const mockNavigate = jest.fn();
    useNavigate.mockReturnValue(mockNavigate);

    render(<BookingForm availableTimes={availableTimes} updateTimes={updateTimes}/>)

    const dateInput = screen.getByTestId('date');
    const button = screen.getAllByText(/Submit/i)[0];
    await act(async () => {
      fireEvent.change(dateInput, { target: { value: mockDate } });
    });
    fireEvent.click(button);
    await waitFor(() => expect(mockNavigate).toHaveBeenCalledWith('/reservation/confirmed'), {timeout: 2000});
  });
});