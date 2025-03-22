import "./Service4.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import { service2Data, service2Steps } from "../../../assets/servicesData";
import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { servicesImgs } from "../../../assets/data";
import Video from "../../../components/Video/Video";
import axios from "axios";
import { baseUrl } from "../../../main";

const Service4 = () => {
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
          `${baseUrl}/services/pre-wedding-photography/67de710faa6520fad7a0666d`
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
    <div className="service4">
      <div className="service4-top-banner">
        <div className="service4-banner">
          <div className="service4-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service4-container">
        <div className="service4-container-sidebar">
          <ServicePageSidebar onSidebarClick={scrollToContent} />
        </div>

        <div className="service4-container-content" ref={contentRef}>
          <div className="service4-container-content-top">
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
            <h1>Pre-Wedding Photography by TK Production Film</h1>
            <p>
              A pre-wedding shoot is the perfect way to celebrate your love
              story before the big day. At TK Production Film, we specialize in
              capturing the chemistry, emotions, and unique connection between
              couples through breathtaking pre-wedding photography and film.
              Whether in iconic cityscapes, lush landscapes, or dreamy
              international locations like Lisbon, Portugal, our expert team
              ensures your love story is beautifully told.
            </p>
          </div>

          <div className="service4-services">
            <h1>Our Pre-Wedding Services</h1>

            <ul>
              {service2Data.map((item) => (
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

          <div className="service4-steps">
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

export default Service4;
