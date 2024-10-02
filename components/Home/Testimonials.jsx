'use client'
import parseHtml from "@/lib/Parser";
import Image from "next/image";
import Slider from "react-slick";
import {useState} from "react"

const Testimonials = (props) => {
  const [isExpanded, setIsExpanded] = useState(null);
  const { testimonials } = props;
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const maxLength = 200

  const getShortText = (text, id) => {
    if(isExpanded === id){
      return text
    }else{
      return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    }
    
  };

  console.log(isExpanded)

  return (
    <>
      <Slider {...settings} arrows={false} >
        {testimonials?.map((item, idx) => (
          <div className="testimonial-block  " key={item.id}>
            <div className="inner-box bg-theme-color reviews_custom">
              <h4 className="title text_white">{item.title}</h4>
              <div className="text text_white">
                {getShortText(parseHtml(item?.content.replace(/(<([^>]+)>)/gi, "")), idx)} {''}
                
                {
                  item?.content.replace(/(<([^>]+)>)/gi, "").length > maxLength &&
                  <span onClick={() => setIsExpanded(isExpanded === idx ? null : idx)} className="">
                    {isExpanded === idx ? 'Read less' : 'Read more'}
                  </span>
                }
              </div>
              <div className="info-box">
                {
                  item?.testimonialOptions?.avatar &&
                  <div className="thumb custom_thumb">
                  <Image
                    width={70}
                    height={70}
                    src={item?.testimonialOptions?.avatar ? item?.testimonialOptions?.avatar : '/images/resource/testi-thumb-1.png'}
                    alt="testimonial"
                  />
                </div>
                }
                
                <h4 className="name text_white">{item?.testimonialOptions?.authorName}</h4>
                <span className="designation text_white">{item?.testimonialOptions?.designation}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Testimonials;
