import React, { useState} from 'react';
import Slider from 'react-slick';
import image1 from '../../assets/image.webp';
import next from '../../assets/next.svg';
import prev from '../../assets/prev.svg';

const StickySlider = () => {
    const NextArrow = ({onClick}) => {
        return (
            <div onClick={onClick} className={"arrow next"} >
                <img src={next}/>
            </div>
        )
    }

    const PrevArrow = ({onClick}) => {
        return (
            <div onClick={onClick} className={"arrow prev"} >
                <img src={prev}/>
            </div>
        )
    }

    const [active, setActive] = useState(0)
    let settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: 70,
        centerMode: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setActive(next)
    };

    const images = [image1, image1, image1, image1, image1, image1]

    return (
        <div className={"carousel"}>
            <Slider {...settings}>
                {images.map((item, id) =>
                    <div key={id} className={id === active ? "slide activeSlide" : "slide"}>
                        <img src={item} alt={item}/>
                        <div className={"slide-text"}>
                            <div className={"slide-header"}>
                                <h3>Спортивные костюмы</h3>
                            </div>
                            <button className={"slide-button"}>150 сом</button>
                        </div>

                    </div>
                )}
            </Slider>
        </div>
    )
}
export default StickySlider;