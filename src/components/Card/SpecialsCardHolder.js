import { useEffect, useState } from 'react';
import Fetch from '../Utility/Fetch'; // Assuming Fetch is the fetch utility
import SpecialsCard from "./SpecialsCard";
import "./Card.css";

function SpecialsCardHolder() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setItems(await Fetch("specialsUrl"));
        };

        fetchData();
    }, []);

    return (
        <section className="card-holder">
            {items.map(item => (
                <SpecialsCard key={item.id} item={item} />
            ))}
        </section>
    );
}

export default SpecialsCardHolder;
