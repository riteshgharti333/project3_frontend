import "./Service4.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import details from "../../../assets/images/details.jpg";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import {
  service4Data,
  service4Steps,
} from "../../../assets/servicesData";
import { useRef } from "react";

const Service4 = () => {

    const contentRef = useRef(null);
  
    const scrollToContent = () => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

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
            <img src={details} alt="" />
            <h1>Pre-Wedding Photography by TK Production Film</h1>
            <p>
              A baby shower is a beautiful celebration of love, joy, and new
              beginnings. At TK Production Films, we specialize in capturing
              these heartfelt moments with elegance and creativity. Whether it’s
              an intimate gathering or a grand event, we ensure every special
              detail, emotion, and laughter is beautifully preserved through our
              expert photography and videography.
            </p>
          </div>

          <div className="service4-services">
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

          <div className="service4-steps">
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
              At TK Production Films, we turn your baby shower into timeless
              memories. Let us capture this joyous milestone with love and
              perfection!
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

export default Service4;
