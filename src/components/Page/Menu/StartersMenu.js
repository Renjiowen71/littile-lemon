import Carousel from "../../utility/Carousel"
import Fetch from "../../utility/Fetch";
import {useState,useEffect} from 'react';
function StartersMenu(){
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await Fetch("startersMenuUrl");
            setItems(data);
        };
        fetchData();
    }, []);
    return (
        <>
            <section className="section-header">
                <h1>Snacks!!</h1>
            </section>
            <Carousel items={items}/>
        </>
    )

}
export default StartersMenu;