import about from '../../../assets/about.jpg';
import about2 from '../../../assets/about2.jpg';
import React, { useState } from 'react';

function About(){
    const styles= ["pos1","pos2","pos3","pos4"];

    const [pos, setPos] = useState([0,2])
    const [style, setStyle] = useState([styles[pos[0]],styles[pos[1]]]);

    const toggleImagePosition = () => {
        setPos([(pos[0]+2)%4,(pos[1]+2)%4]);
        setStyle([styles[(pos[0]+1)%4],styles[(pos[1]+1)%4]]);
        setTimeout(() => {
            setStyle([styles[(pos[0]+2)%4],styles[(pos[1]+2)%4]]);
        }, 200);
    };
    return (
        <>
            <article className="text">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>An elegant, family-owned Mediterranean restaurant, we honor the rich culinary traditions of the region while infusing each dish with a refined, modern touch. Our thoughtfully curated menu celebrates timeless recipes reimagined with contemporary sophistication, offering a dining experience that is both rooted in heritage and elevated in presentation.</p>
            </article>
            <aside>
                <img
                    src={about}
                    className={style[0]}
                    onClick={toggleImagePosition}
                    alt='Restaurant'
                />
                <img
                    src={about2}
                    className={style[1]}
                    onClick={toggleImagePosition}
                    alt='Restaurant'
                />
            </aside>
        </>
    )
}

export default About;