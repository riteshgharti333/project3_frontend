import "./WhoWeAre.scss";

import { TiArrowRight } from "react-icons/ti";

import m1 from "../../assets/images/m1.jpg";
import m2 from "../../assets/images/m2.jpg";
import m3 from "../../assets/images/m3.jpg";

const WhoWeAre = () => {
  return (
    <div className="whoWeAre">
      <div className="whoWeAre-left">
        <h3>
          WHO WE ARE <span className="dots">...</span>
        </h3>
        <h1>
          The Mulberry <span className="break-line">Weddings</span>
        </h1>

        <p>
          We are dedicated to immortalizing the enchanting moments of your
          special day. With a blend of classic elegance and modern flair, our
          expert photographers craft stunning visual narratives that reflect the
          unique essence and emotion of each couple’s journey.
        </p>

        <span className="read-more">
          Read More <TiArrowRight className="right-arrow" />
        </span>
      </div>

      <div className="whoWeAre-right">
            <img src={m1} alt="Wedding 1" />
          </div>
        </div>
  );
};

export default WhoWeAre;
