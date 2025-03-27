import Carousel from "./Carousel"
import Fetch from "../../utility/Fetch";
import {useState,useEffect} from 'react';
function DesertsMenu(){
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await Fetch("desertsMenuUrl");
            setItems(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <section className="section-header">
                <h1>Something Sweets</h1>
            </section>
            <Carousel items={items}/>
        </>
    )
}
export default DesertsMenu;