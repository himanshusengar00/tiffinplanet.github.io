import React from 'react'
import { Carousel } from 'react-carousel-minimal';

export default function carousel() {
    const data = [
        {
            image: "https://cdn.pixabay.com/photo/2014/04/05/11/27/buffet-315691_960_720.jpg",

        },
        {
            image: "https://cdn.pixabay.com/photo/2015/03/26/10/07/restaurant-690975_960_720.jpg",

        },
        {
            image: "https://cdn.pixabay.com/photo/2021/06/28/14/06/curry-6371737_960_720.jpg",

        },
        {
            image: "https://cdn.pixabay.com/photo/2021/08/24/14/21/indian-food-6570809_960_720.jpg",

        }

    ];


    return (
        <div>
            <div>
                <Carousel
                    data={data}
                    width="auto"
                    height="610px"
                    automatic={true}
                    time={9000}
                    dots={true}
                    slideImageFit="cover"
                />
            </div>
        </div>
    )
}
