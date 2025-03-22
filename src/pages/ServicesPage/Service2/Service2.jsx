import "./Service2.scss";
import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import details from "../../../assets/images/details.jpg";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import { service1Data, service1Steps } from "../../../assets/servicesData";

import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { servicesImgs } from "../../../assets/data";

import Video from "../../../components/Video/Video";
import { useEffect } from "react";
import { baseUrl } from "../../../main";
import axios from "axios";
import { TbCodeAsterisk } from "react-icons/tb";
import { useState } from "react";

const Service2 = () => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [serviceImages, setServiceImages] = useState();

  useEffect(() => {
    const getServiceData = async () => {
      try {
        const { data } = await axios.get(
          `${baseUrl}/services/wedding-cinematography/67de70bbaa6520fad7a06669`
        );

        if (data && data.serviceImages?.images) {
          setServiceImages(data.serviceImages.images);
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
        TbCodeAsterisk.error("Failed to fetch service data. Please try again.");
      }
    };

    getServiceData();
  }, []);

  return (
    <div className="service2">
      <div className="service2-top-banner">
        <div className="service2-banner">
          <div className="service2-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service2-container">
        <div className="service2-container-sidebar">
          <ServicePageSidebar onSidebarClick={scrollToContent} />
        </div>

        <div className="service2-container-content" ref={contentRef}>
          <div className="service2-container-content-top">
            <div className="services-img-slide">
              <Swiper
                modules={[EffectFade, Autoplay]}
                effect="fade"
                loop={true}
                speed={1200}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="services-slide"
              >
                {
                  serviceImages?.map((item, index) => (
                    <SwiperSlide key={index} className="service_slide">
                      <img src={item} loading="lazy" alt="services" />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <h1>Wedding Cinematography by TK Production Film</h1>
            <p>
              At TK Production Film, we bring your love story to life through
              stunning wedding photography and cinematography. Led by Taufeq
              Khan, with over 16 years of experience and 700+ weddings captured,
              we specialize in creating timeless memories that reflect the
              beauty, emotions, and joy of your special day.
            </p>
          </div>

          <div className="service2-services">
            <h1>Our Services</h1>

            <ul>
              {service1Data.map((item) => (
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

          <div className="service2-steps">
            <h1>Our Service Steps</h1>

            <ul>
              {service1Steps.map((item) => (
                <li key={item.no}>
                  <p>{item.no}</p>
                  <p>
                    <span>{item.title} – </span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p>
              With a commitment to excellence and attention to detail, TK
              Production Film creates unforgettable wedding memories worldwide.
              Let us capture your love story beautifully!
            </p>
          </div>

          <div className="service2-steps">
            <h1>Our Work</h1>

            <Video videoUrl="https://youtu.be/hAQ666Nzh0E?si=EgQSRNL0zfiEnr8a" />
          </div>
        </div>
      </div>
      <div className="service-contact">
        <ServiceContact />
      </div>
    </div>
  );
};

export default Service2;
