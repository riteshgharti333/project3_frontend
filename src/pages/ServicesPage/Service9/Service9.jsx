import "./Service9.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import { service7Data, service7Steps } from "../../../assets/servicesData";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { servicesImgs } from "../../../assets/data";

const Service9 = () => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="service9">
      <div className="service9-top-banner">
        <div className="service9-banner">
          <div className="service9-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service9-container">
        <div className="service9-container-sidebar">
          <ServicePageSidebar onSidebarClick={scrollToContent} />
        </div>

        <div className="service9-container-content" ref={contentRef}>
          <div className="service9-container-content-top">
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
            <h1>Graduation Photography by TK Production Film</h1>
            <p>
              Graduation is a milestone achievement, marking years of dedication
              and hard work. At TK Production Film, we specialize in capturing
              this proud moment with stunning photography and cinematic visuals.
              Whether it's an individual session, a group celebration, or a full
              graduation event, we ensure that your success story is beautifully
              documented.
            </p>
          </div>

          <div className="service9-services">
            <h1>Our Graduation Photography Services</h1>

            <ul>
              {service7Data.map((item) => (
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

          <div className="service9-steps">
            <h1>Our Service Steps</h1>

            <ul>
              {service7Steps.map((item) => (
                <li key={item.no}>
                  <p>{item.no}</p>
                  <p>
                    <span>{item.title} – </span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p>
              At TK Production Film, we make your graduation memories last a
              lifetime. Let us celebrate your achievement with photography that
              reflects your success!
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

export default Service9;
