import { Link } from 'react-router-dom';

import './Specials.css';
import { MdDeliveryDining } from "react-icons/md";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Specials() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              arrows: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return(
        <>
            <section id='specials'>
                <div className="specials-header">
                    <h3>This week's specials</h3>
                    <Link smooth to="/#specials" className="button">online menu</Link>
                </div>
                <div className='feature-dishes'>
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div className='card specials'>
                                <img src={d.img} alt="" />
                                <div className='card-body'>
                                    <div className='card-title'>
                                    <h4>{d.dish}</h4>
                                    <span className='dish-price'>{d.price}</span>
                                    </div>
                                    <p>{d.description}</p>
                                    <div className='card-link'>
                                      <Link smooth to="/#specials">Order for delivery <span className='delivery-icon'><MdDeliveryDining size={25} title='Order for delivery' /></span></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}

const data = [
    {
      img: '/images/greek_salad.jpg',
      dish: 'Greek Salad',
      price: '$12.99',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eos dolores libero ipsa, sint, neque totam incidunt sed consequatur, nihil consectetur assumenda impedit doloremque hic a perferendis maiores voluptate esse!'
    },
    {
      img: '/images/bruschetta.jpg',
      dish: 'Bruschetta',
      price: '$5.99',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eos dolores libero ipsa, sint, neque totam incidunt sed consequatur, nihil consectetur assumenda impedit doloremque hic a perferendis maiores voluptate esse!'
    },
    {
      img: '/images/dessert.jpg',
      dish: 'Lemon Dessert',
      price: '$9.99',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eos dolores libero ipsa, sint, neque totam incidunt sed consequatur, nihil consectetur assumenda impedit doloremque hic a perferendis maiores voluptate esse!'
    },
    {
      img: '/images/fish.jpg',
      dish: 'Grilled Fish',
      price: '$19.99',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae eos dolores libero ipsa, sint, neque totam incidunt sed consequatur, nihil consectetur assumenda impedit doloremque hic a perferendis maiores voluptate esse!'
    },
  
  ]

export default Specials;