import React from "react";

interface SlideShowProp {
    images: string[]
}

export const SlideShow = () => {
    return (
        <>
         <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ height: "500px" }} // Set desired height here
    >
      <div className="carousel-inner" style={{ height: "100%" }}>
        <div className="carousel-item active" style={{ height: "100%" }}>
          <img
            src="/switzerland.jpg"
            className="d-block w-100"
            alt="First Slide"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="carousel-item" style={{ height: "100%" }}>
          <img
            src="https://via.placeholder.com/1920x1080?text=Second+Slide"
            className="d-block w-100"
            alt="Second Slide"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
        <div className="carousel-item" style={{ height: "100%" }}>
          <img
            src="https://via.placeholder.com/1920x1080?text=Third+Slide"
            className="d-block w-100"
            alt="Third Slide"
            style={{ objectFit: "cover", height: "100%" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        </>
    )
}