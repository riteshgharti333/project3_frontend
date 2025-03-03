import "./Service8.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import { service4Data, service4Steps } from "../../../assets/servicesData";

import s1 from "../../../assets/images/serviceimgs/s1.jpeg";
import { useRef } from "react";

const Service8 = () => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="service8">
      <div className="service8-top-banner">
        <div className="service8-banner">
          <div className="service8-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service8-container">
        <div className="service8-container-sidebar">
          <ServicePageSidebar onSidebarClick={scrollToContent} />
        </div>

        <div className="service8-container-content" ref={contentRef}>
          <div className="service8-container-content-top">
            <img src={s1} alt="" />
            <h1>Baby Shower Photography by TK Production Film</h1>
            <p>
              A baby shower is a beautiful celebration of love, joy, and new
              beginnings. At TK Production Film, we specialize in capturing
              these heartfelt moments with elegance and creativity. Whether it’s
              an intimate gathering or a grand event, we ensure every special
              detail, emotion, and laughter is beautifully preserved through our
              expert photography and videography
            </p>
          </div>

          <div className="service8-services">
            <h1>Our Baby Shower Photography Services</h1>

            <ul>
              {service4Data.map((item) => (
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

          <div className="service8-steps">
            <h1>Our Service Steps</h1>

            <ul>
              {service4Steps.map((item) => (
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

export default Service8;
