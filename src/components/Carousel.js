import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Carousel = (props) => {
    const {loop,margin,nav,autoplay,autoplayTimeout,items}=props;
    return (
        <>
            <OwlCarousel
                className="owl-theme"
                loop={loop}
                margin={margin}
                nav={nav}
                items={items}
                autoPlay={autoplay}
                autoplayTimeout={autoplayTimeout}
            >
               {props.children} 
            </OwlCarousel>
        </>
    )
}

export default Carousel;
