import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img from '../assets/img/6.png'
import img2 from '../assets/img/7.png'
import img3 from '../assets/img/8.png'
import img4 from '../assets/img/9.png'
import img5 from '../assets/img/23.png'
import img6 from '../assets/img/25.png'
import img7 from '../assets/img/12.png'
import img8 from '../assets/img/13.png'

const Section2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
  };


  const items = [
    { name: 'Dough Delight', image: img },
    { name: 'Glaze Craze', image: img2 },
    { name: 'Donut Haven', image: img3 },
    { name: 'Frosted Bliss', image: img4 },
    { name: 'Sprinkle & Sip', image: img5 },
    { name: 'Donutopia', image: img6 },
    { name: 'Sweet Circles', image: img7 }
  ]
  return (
    <div className="w-[90%] mx-auto mt-20">
      <h1 className="pb-10 md:text-5xl font-bold text-center text-[#633c45]">Explore Our Goodies</h1>
      <Slider {...settings}>
        {
          items.map((ele) => (
            <div>
              <h3 className="p-4 text-center ">
                <img src={ele.image} className="w-40 h-40" alt="" />
                <p className="font-bold">{ele.name}</p>
              </h3>
            </div>

          ))
        }

      </Slider>
    </div>
  );
};

export default Section2;
