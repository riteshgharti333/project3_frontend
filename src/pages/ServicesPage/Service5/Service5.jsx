import "./Service5.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import details from "../../../assets/images/details.jpg";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import { service1Data, service1Steps, service5Data, service5Steps } from "../../../assets/servicesData";
import { useRef } from "react";

const Service5 = () => {

  const contentRef = useRef(null);
  
    const scrollToContent = () => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <div className="service5">
      <div className="service5-top-banner">
        <div className="service5-banner">
          <div className="service5-banner-desc">
            <h1>Service Details</h1>
          </div>
        </div>
      </div>

      <div className="service5-container">
        <div className="service5-container-sidebar">
          <ServicePageSidebar onSidebarClick={scrollToContent} />
        </div>

        <div className="service5-container-content" ref={contentRef}>
          <div className="service5-container-content-top">
            <img src={details} alt="" />
            <h1>Civil Marriage Photography by TK Production Films</h1>
            <p>
              A civil marriage is a beautiful and intimate celebration of love,
              and at TK Production Films, we specialize in capturing its essence
              with elegance and authenticity. Whether it’s a simple registry
              ceremony or a grand celebration with loved ones, our expert
              photography ensures every heartfelt moment is preserved forever.
            </p>
          </div>

          <div className="service5-services">
            <h1>Our Civil Marriage Photography Services</h1>

            <ul>
              {service5Data.map((item) => (
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

          <div className="service5-steps">
            <h1>Our Service Steps</h1>

            <ul>
              {service5Steps.map((item) => (
                <li key={item.no}>
                  <p>{item.no}</p>
                  <p>
                    <span>{item.title} – </span> {item.desc}
                  </p>
                </li>
              ))}
            </ul>

            <p>
            At TK Production Films, we turn your civil marriage into a timeless visual story. Let us capture your love with beauty and elegance!
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

export default Service5;
