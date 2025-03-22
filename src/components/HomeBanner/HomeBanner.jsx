import "./HomeBanner.scss";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { bigBanner, smBanner } from "../../assets/data";
import axios from "axios";
import { baseUrl } from "../../main";


const HomeBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);

  const [banners, setBanners] = useState(
    window.matchMedia("(max-width: 480px)").matches ? smBanner : bigBanner
  );

  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${baseUrl}/home-banner/all-home-banners`);
        if (data && data.homeBanner) {
          setAllData(data.homeBanner);
        }
      } catch (error) {
        console.error("Error fetching home banners:", error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    setInitialized(true);

    // Media query listener
    const mediaQuery = window.matchMedia("(max-width: 480px)");

    const handleMediaChange = (e) => {
      setBanners(e.matches ? smBanner : bigBanner);
    };

    // Attach listener
    mediaQuery.addEventListener("change", handleMediaChange);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener("change", handleMediaChange);
  }, []);

  

  return (
    <div className="homeBanner">
      <Swiper
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="swiper-container"
      >
        {allData.length  > 0 && allData.map((slide , index) => (
          <SwiperSlide key={index} className="slide">
            <div className="homeBanner-imgs">
              <img src={slide.image} alt="Banner" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="swiper-button-prev">Prev</div>
      <div className="swiper-button-next">Next</div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default HomeBanner;
