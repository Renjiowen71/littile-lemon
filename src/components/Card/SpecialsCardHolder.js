import { useEffect, useState } from 'react';
import Fetch from '../utility/Fetch'; // Assuming Fetch is the fetch utility
import "./Card.css";
import Carousel from '../utility/Carousel';

function SpecialsCardHolder() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setItems(await Fetch("specialsUrl"));
        };

        fetchData();
    }, []);

    return (
        <Carousel items={items}/>
    );
}

export default SpecialsCardHolder;
