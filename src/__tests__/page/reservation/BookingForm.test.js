import { render, screen } from "@testing-library/react";
import BookingForm from '../../../components/page/reservation/BookingForm';

test('Renders the BookingForm form', () => {
    const updateTimesMock = jest.fn();
    render(<BookingForm availableTimes={[]} updateTimes={updateTimesMock} />);
    const dateElement = screen.getByText("Choose date:");
    const timeElement = screen.getByText("Choose time:");
    expect(dateElement).toBeInTheDocument();
    expect(timeElement).toBeInTheDocument();
})