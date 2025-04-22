import Carousel from "../../utility/Carousel"
import Fetch from "../../utility/Fetch";
import {useState,useEffect} from 'react';

function SpecialsMenu(){
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await Fetch("specialsMenuUrl");
            setItems(data);
        };
        fetchData();
    }, []);
    return (
        <>
            <section className="section-header">
                <h1>This Week Specials!!!</h1>
            </section>
            <Carousel items={items}/>
        </>
    )
}
export default SpecialsMenu;