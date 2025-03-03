import './ReviewCard.scss';
import { review_card } from '../../assets/data';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const ReviewCard = () => {

  
  return (
    <div className='reviewCard'>
      <Swiper
        modules={[Pagination]}
        slidesPerView={4} // Shows 4 images at full width
        spaceBetween={20}
        pagination={{ clickable: true }}
      >
        {review_card.map((card, index) => (
          <SwiperSlide key={index}>
            <img src={card.img} alt={`Review ${index + 1}`} className='reviewImage' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ReviewCard;
