import Carousel from "../../utility/Carousel"
import Fetch from "../../utility/Fetch";
import {useState,useEffect} from 'react';
function MainsMenu(){
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await Fetch("mainsMenuUrl");
            setItems(data);
        };
        fetchData();
    }, []);

    return (
        <>
            <section className="section-header">
                <h1>I'm Hungry</h1>
            </section>
            <Carousel items={items}/>
        </>
    )
}
export default MainsMenu;