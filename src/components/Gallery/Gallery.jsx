import "./Gallery.scss";

import { useState } from "react";
import ReactPaginate from "react-paginate";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { gallery } from "../../assets/data";

const Gallery = () => {
  const [overlayDirection, setOverlayDirection] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 10;

  const handleMouseEnter = (e) => {
    const { offsetWidth: width, offsetHeight: height } = e.currentTarget;
    const { clientX: x, clientY: y } = e;

    const fromLeft = x < width / 2;
    const fromTop = y < height / 2;

    if (fromLeft && fromTop) {
      setOverlayDirection("top-left");
    } else if (fromLeft && !fromTop) {
      setOverlayDirection("bottom-left");
    } else if (!fromLeft && fromTop) {
      setOverlayDirection("top-right");
    } else {
      setOverlayDirection("bottom-right");
    }
  };

  // Calculate the cards to display for the current page
  const offset = currentPage * cardsPerPage;
  const currentCards = gallery.slice(offset, offset + cardsPerPage);

  // Handle page change with scroll to top
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    window.scrollTo(0, 0);
  };

  return (
    <div className="gallery">
      
      <div className="gallery-top-banner">
        <div className="gallery-banner">
          <div className="gallery-banner-desc">
            <h1>Our Projects</h1>
          </div>
        </div>
      </div>
      <div className="gallery-container">
        <div className="gallery-container-top">
          <h1> Our Portfolio</h1>
          <p>TK Production Films All of your beautiful memories</p>
        </div>

        <div className="gallery-cards">
          {currentCards.map((card, index) => (
            <div
              key={index}
              className={`gallery-card ${overlayDirection}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setOverlayDirection("")}
            >
              <img src={card.img} alt="" />
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <ReactPaginate
          previousLabel={
            <span className="prev-icon">
              <FaChevronLeft />
            </span>
          }
          nextLabel={
            <span className="next-icon">
              <FaChevronRight />
            </span>
          }
          pageCount={Math.ceil(gallery.length / cardsPerPage)}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          activeClassName={"active"}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          breakLabel=".........."
        />
      </div>
    </div>
  );
};

export default Gallery;
