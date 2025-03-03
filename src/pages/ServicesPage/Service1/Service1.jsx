import "./Service1.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";


import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import { service1Data, service1Steps } from "../../../assets/servicesData";

import s1 from "../../../assets/images/serviceimgs/s1.jpeg";
import { useRef } from "react";

const Service1 = () => {

  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="service1">
      <div className="service1-top-banner">
        <div className="service1-banner">
          <div className="service1-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service1-container">
        <div className="service1-container-sidebar">
          <ServicePageSidebar  onSidebarClick={scrollToContent}/>
        </div>

        <div className="service1-container-content" ref={contentRef}>
          <div className="service1-container-content-top">
            <img src={s1} alt="" />
            <h1>Wedding Photography by TK Production Film</h1>
            <p>
              At TK Production Film, we bring your love story to life through
              stunning wedding photography and cinematography. Led by Taufeq
              Khan, with over 16 years of experience and 700+ weddings captured,
              we specialize in creating timeless memories that reflect the
              beauty, emotions, and joy of your special day.
            </p>
          </div>

          <div className="service1-services">
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

          <div className="service1-steps">
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
        </div>
      </div>

      <div className="service-contact">
        <ServiceContact />
      </div>
    </div>
  );
};

export default Service1;
