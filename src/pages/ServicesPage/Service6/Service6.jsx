import "./Service6.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import { service6Data, service6Steps } from "../../../assets/servicesData";
import { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { useState } from "react";
import { useEffect } from "react";
import { baseUrl } from "../../../main";
import axios from "axios";

const Service6 = () => {
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
          `${baseUrl}/services/engagement-photography-couple-portraits/67de7149aa6520fad7a06671`
        );

        if (data && data.serviceImages?.images) {
          setServiceImages(data.serviceImages.images);
        }
      } catch (error) {
        console.error("Error fetching service data:", error);
        toast.error("Failed to fetch service data. Please try again.");
      }
    };

    getServiceData();
  }, []);

  return (
    <div className="service6">
      <div className="service6-top-banner">
        <div className="service6-banner">
          <div className="service6-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service6-container">
        <div className="service6-container-sidebar">
          <ServicePageSidebar onSidebarClick={scrollToContent} />
        </div>

        <div className="service6-container-content" ref={contentRef}>
          <div className="service6-container-content-top">
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
                {
                  serviceImages?.map((item, index) => (
                    <SwiperSlide key={index} className="service_slide">
                      <img src={item} loading="lazy" alt="services" />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
            <h1>
              Engagement Photography & Couple Portraits by TK Production Film
            </h1>
            <p>
              Your engagement marks the beginning of a beautiful journey, and at
              TK Production Film, we capture this special moment with creativity
              and elegance. Whether it’s an intimate proposal, a grand
              engagement celebration, or a romantic couple shoot, our expert
              photography ensures your love story is beautifully preserved.
            </p>
          </div>

          <div className="service6-services">
            <h1>Our Engagement Photography & Couple Portrait Services</h1>

            <ul>
              {service6Data.map((item) => (
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

          <div className="service6-steps">
            <h1>Our Service Steps</h1>

            <ul>
              {service6Steps.map((item) => (
                <li key={item.no}>
                  <p>{item.no}</p>
                  <p>
                    <span>{item.title} – </span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p>
              At TK Production Film, we turn your engagement into timeless
              memories. Let us capture the love, excitement, and beauty of your
              journey together!
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

export default Service6;
