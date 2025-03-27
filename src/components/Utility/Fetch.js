import lemon from "../../assets/lemon dessert.jpg";
import bruchetta from "../../assets/bruchetta.png";
import salad from "../../assets/salad.png";
import thomas from "../../assets/thomas.jpg";
import john from "../../assets/john.webp";
import catherina from "../../assets/catherina.jpg";
import yohanes from "../../assets/yohanes.jpg";
async function Fetch(url){
    const specialsData = [
        {
            id: 1,
            img: salad,
            name: "Greek Salad",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        },
        {
            id: 2,
            img: bruchetta,
            name: "Bruchetta",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: 5.99
        },
        {
            id: 3,
            img: lemon,
            name: "Lemon Dessert",
            desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: 5.00
        }
    ];
    if(url==="specialsUrl") return specialsData;

    const specialsMenuData = [
        {
            id: 1,
            img: salad,
            name: "Greek Salad1",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        },
        {
            id: 2,
            img: bruchetta,
            name: "Bruchetta2",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: 5.99
        },
        {
            id: 3,
            img: lemon,
            name: "Lemon Dessert3",
            desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: 5.00
        }
    ];
    if(url==="specialsMenuUrl") return specialsMenuData;

    const startersMenuData = [
        {
            id: 1,
            img: salad,
            name: "Greek Salad1",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        },
        {
            id: 2,
            img: bruchetta,
            name: "Bruchetta2",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: 5.99
        },
        {
            id: 3,
            img: lemon,
            name: "Lemon Dessert3",
            desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: 5.00
        },
        {
            id: 4,
            img: bruchetta,
            name: "Bruchetta4",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: 5.99
        },
        {
            id: 5,
            img: salad,
            name: "Greek Salad5",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        }
    ];
    if(url==="startersMenuUrl") return startersMenuData;

    const mainsMenuData = [
        {
            id: 1,
            img: salad,
            name: "Greek Salad1",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        },
        {
            id: 2,
            img: bruchetta,
            name: "Bruchetta2",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: 5.99
        },
        {
            id: 3,
            img: lemon,
            name: "Lemon Dessert3",
            desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: 5.00
        },
        {
            id: 4,
            img: bruchetta,
            name: "Bruchetta4",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: 5.99
        },
        {
            id: 5,
            img: salad,
            name: "Greek Salad5",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        },
        {
            id: 6,
            img: salad,
            name: "Greek Salad6",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        },
        {
            id: 7,
            img: salad,
            name: "Greek Salad7",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        }
    ];
    if(url==="mainsMenuUrl") return mainsMenuData;

    const desertsMenuData = [
        {
            id: 1,
            img: salad,
            name: "Greek Salad1",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        },
        {
            id: 2,
            img: bruchetta,
            name: "Bruchetta2",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: 5.99
        },
        {
            id: 3,
            img: lemon,
            name: "Lemon Dessert3",
            desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price: 5.00
        },
        {
            id: 4,
            img: bruchetta,
            name: "Bruchetta4",
            desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
            price: 5.99
        },
        {
            id: 5,
            img: salad,
            name: "Greek Salad5",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        },
        {
            id: 6,
            img: salad,
            name: "Greek Salad6",
            desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price: 12.99
        }
    ];
    if(url==="desertsMenuUrl") return desertsMenuData;

    const testimonialsData = [
        {
            id: 1,
            img: thomas,
            name: "Thomas",
            rev: "Great food and comfortable place.",
            rating: 8
        },{
            id: 2,
            img: john,
            name: "John",
            rev: "The famous greek salad is very good. I like ittt!!!!",
            rating: 9
        },{
            id: 3,
            img: catherina,
            name: "Catharina",
            rev: "I like the Bruchetta, but the other food is mid.",
            rating: 6
        },{
            id: 4,
            img: yohanes,
            name: "Yohanes",
            rev: "The place is not as good as other review, and the food is mid at best.",
            rating: 4
        },
    ];
    if(url==="testimonialsUrl") return testimonialsData;

    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch items');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching items:', error);
        throw error;
      }
}


export default Fetch;