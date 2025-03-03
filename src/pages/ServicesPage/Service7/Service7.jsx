import "./Service7.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import {  service3Data, service3Steps } from "../../../assets/servicesData";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { servicesImgs } from "../../../assets/data";

const Service7 = () => {

    const contentRef = useRef(null);
  
    const scrollToContent = () => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };
  

  return (
    <div className="service7">
      <div className="service7-top-banner">
        <div className="service7-banner">
          <div className="service7-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service7-container">
        <div className="service7-container-sidebar">
          <ServicePageSidebar  onSidebarClick={scrollToContent}/>
        </div>

        <div className="service7-container-content" ref={contentRef}>
          <div className="service7-container-content-top">
          <div className="services-img-slide">
              <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                loop={true}
                speed={1200}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                className="services-slide"
              >
                {servicesImgs.map((item, index) => (
                  <SwiperSlide key={index} className="service_slide">
                    <img src={item.img} alt="services" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <h1>Birthday Photography by TK Production Film</h1>
            <p>
            Celebrate life’s special milestones with TK Production Film! Whether it's a grand birthday celebration or an intimate gathering, we capture every joyful moment with creativity and precision. Our expert team ensures that your birthday memories are beautifully preserved through high-quality photography and cinematic film, making them unforgettable.
            </p>
          </div>

          <div className="service7-services">
            <h1>Our Birthday Services</h1>

            <ul>
              {service3Data.map((item) => (
                <li key={item.title}>
                  <FaCheck className="check-icon" />
                  <div className="services-desc">
                    <p>{item.title} :&nbsp;</p>
                    <p>{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="service7-steps">
            <h1>Our Service Steps</h1>

            <ul>
              {service3Steps.map((item) => (
                <li key={item.no}>
                  <p>{item.no}</p>
                  <p>
                    <span>{item.title} – </span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p>
            At TK Production Film, we make your graduation memories last a lifetime. Let us celebrate your achievement with photography that reflects your success!
            </p>
          </div>
        </div>
      </div>

      <div className="service-contact">
        <ServiceContact />
      </div>
    </div>
  );
};

export default Service7;
