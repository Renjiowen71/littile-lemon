import { useEffect, useState } from 'react';
import Fetch from '../utility/Fetch'; // Assuming Fetch is the fetch utility
import TestiCard from "./TestiCard";
import "./Card.css";

function TestiCardHolder() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setItems(await Fetch("testimonialsUrl"));
        };

        fetchData();
    }, []);

    return (
        <section className="card-holder">
            {items.map(item => (
                <TestiCard key={item.id} item={item} />
            ))}
        </section>
    );
}

export default TestiCardHolder;
