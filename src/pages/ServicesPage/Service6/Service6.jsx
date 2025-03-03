import "./Service6.scss";

import ServicePageSidebar from "../ServicePageSidebar/ServicePageSidebar";

import details from "../../../assets/images/details.jpg";

import { FaCheck } from "react-icons/fa";
import ServiceContact from "../../../components/ServiceContact/ServiceContact";
import { service6Data, service6Steps } from "../../../assets/servicesData";
import { useRef } from "react";

const Service6 = () => {

  const contentRef = useRef(null);
  
    const scrollToContent = () => {
      if (contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

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
          <ServicePageSidebar onSidebarClick={scrollToContent}/>
        </div>

        <div className="service6-container-content" ref={contentRef}>
          <div className="service6-container-content-top">
            <img src={details} alt="" />
            <h1>
              Engagement Photography & Couple Portraits by TK Production Films
            </h1>
            <p>
              Your engagement marks the beginning of a beautiful journey, and at
              TK Production Films, we capture this special moment with
              creativity and elegance. Whether it’s an intimate proposal, a
              grand engagement celebration, or a romantic couple shoot, our
              expert photography ensures your love story is beautifully
              preserved.
            </p>
          </div>

          <div className="service6-services">
            <h1>Our Services</h1>

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
              At TK Production Films, we turn your engagement into timeless
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
