import React, { useState, useRef, useEffect } from "react";
import "./ClientReview.scss";

import { FaStar } from "react-icons/fa";
import { RiDoubleQuotesR } from "react-icons/ri";
import { client_reviews } from "../../assets/data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bg2 from "../../assets/images/bg2.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const ClientReview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedReview, setExpandedReview] = useState(null); 
  const modalRef = useRef(null); // Reference for modal

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setExpandedReview(null);
      }
    };

    if (expandedReview) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedReview]);

  return (
    <div className="clientReview">
      <div className="clientReview-img">
        <img src={bg2} alt="Client Background" />

        <div className="clientReview-card">
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            speed={1200}
            navigation={{
              prevEl: ".client-prev",
              nextEl: ".client-next",
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {client_reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <ReviewCard
                  review={review}
                  isActive={index === activeIndex}
                  onExpand={() => setExpandedReview(review)}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="client-prev">
            <BsArrowLeft className="client-icon" />
          </div>
          <div className="client-next">
            <BsArrowRight className="client-icon" />
          </div>
        </div>
      </div>

      {/* Overlay Modal for Full Review */}
      {expandedReview && (
        <div className="clientReview-overlay">
          <div className="clientReview-modal" ref={modalRef}>
            <button className="close-btn" onClick={() => setExpandedReview(null)}>✖</button>
            <p>" {expandedReview.review_title} "</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ReviewCard = ({ review, isActive, onExpand }) => {
  const [isTruncated, setIsTruncated] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const element = textRef.current;
    if (element) {
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 3; 
      setIsTruncated(element.scrollHeight > maxHeight);
    }
  }, [review]);

  return (
    <div className="clientReview-card-desc">
      <div className="clientReview-card-top">
        <div className="clientReview-card-stars">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="star" />
          ))}
        </div>

        <div className="clientReview-card-quotes">
          <RiDoubleQuotesR className="quotes" />
        </div>
      </div>

      <p ref={textRef} className="reviews">
        " {review.review_title} "
      </p>

      {isTruncated && (
        <button className="read-more-btn" onClick={onExpand}>
          Read More
        </button>
      )}

      <hr className="line" />

      <div className="review-name">
        <img src={review.img} alt={review.review_name} />
        <div className="review-name-desc">
          <p>{review.review_name}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;
