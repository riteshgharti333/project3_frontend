import "./PhotoAlbums.scss";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { photoAlbums } from "../../assets/data";
import { useEffect, useState } from "react";


const PhotoAlbums = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [initialized, setInitialized] = useState(false);

  // Set the animation trigger after component mounts
  useEffect(() => {
    setInitialized(true);
  }, []);

  return (
    <div className="photoAlbums">
      <h1>Photo Albums</h1>
      <p className="photoAlbums-desc">
        Collection of photos All of Our Best Works
      </p>

      <div className="photoAlbums-cards">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={20}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="photoAlbums-slider album-swiper"
          initialSlide={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
          }}
        >
          {photoAlbums.map((album, index) => (
            <SwiperSlide key={album.image} className="photoAlbums-card">
              <div className="photoAlbums-card-content">
                <img src={album.image} alt={album.image} />

                <div
                  className={`homeBanner-desc ${
                    initialized && index === activeIndex ? "animate" : ""
                  }`}
                >
                  {/* <div className="photoAlbums-card-content-desc">
                    <h3>Birght Boho Sunshine</h3>
                    <p>By Jonathan Wilson</p>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoAlbums;
