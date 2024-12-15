import React from "react";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <style>
        {/* .carousel-item img{
    object-fit: cover;
}
.cimg{
    filter: brightness(50%);
}
.carousel-caption {
    text-align: center;
}
.btn-rounded {
    border-radius: 50px;
} */}
      </style>
      <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact' />
      <header>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/images/719326.jpg" className="d-block w-100 cimg" alt="..." height="500px" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                <h1>Uptrip</h1>
                <p> Elevate Your Journey, Enrich Your World.</p>
                <Link to="/destinations">
                  <button className="btn btn-primary btn25round" style={{ width: "200px", backgroundColor: "#ffdc3e", borderColor: "#ffdc3e", color: "black" }}>Explore</button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/pexels-photo-1483053.jpeg" className="d-block w-100 cimg" alt="..." height="500px" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                <h1>Uptrip</h1>
                <p> Elevate Your Journey, Enrich Your World.</p>
                <Link to="/destinations">
                  <button className="btn btn-primary btn25round" style={{ width: "200px", backgroundColor: "#ffdc3e", borderColor: "#ffdc3e", color: "black" }}>Explore</button>
                </Link>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/wallpaperflare.com_wallpaper.jpg" className="d-block w-100 cimg" alt="..." height="500px" />
              <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
                <h1>Uptrip</h1>
                <p> Elevate Your Journey, Enrich Your World.</p>
                <Link to="/destinations">
                  <button className="btn btn-primary btn25round" style={{ width: "200px", backgroundColor: "#ffdc3e", borderColor: "#ffdc3e", color: "black" }}>Explore</button>
                </Link>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </header>

      <section id="section1" className="container my-4 d-flex justify-content-center">
        <div className="row justify-content-center" style={{ paddingTop: "20px" }}>
          <div className="col-4">
            <img src="/images/us.jpeg" className="img-fluid" alt="Red Panda With a big smile." width="300px" height="300px" />
          </div>
          <div className="col-1"></div>

          <div className="col-4">
            <p><b>About us!</b><br /> We are four adventurus 2nd year COMBUS students that have a diverse background and have visited numerous locations, here to provide you with some great insights which may influence your next trip decision!</p>
          </div>
        </div>
      </section>




      <div className="container" style={{ paddingTop: "50px" }}>
        <h3 style={{ paddingLeft: "13%" }}>Destinations</h3>
        <section id="section2" className="container my-4 d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-4">
              <p><b>Japan</b><br /> Japan is a mesmerizing blend of ancient traditions and cutting-edge modernity. From serene temples in Kyoto to neon-lit Tokyo streets, it offers stunning landscapes, exquisite cuisine, and warm hospitality. Cherry blossoms, bustling markets, and rich history make it a must-visit destination for any traveler seeking culture and adventure.</p>
              <Link to="/destinations/japan">
                Read more...
              </Link>
            </div>
            <div className="col-1"></div>
            <div className="col-4">
              <img src="/images/jpico.jpeg" className="img-fluid" alt="Japan overview" width="300px" height="300px" />
            </div>
            <div className="row justify-content-center" style={{ paddingTop: "50px" }}>
              <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center">
                <p className="mb-2 mb-md-0">Look for:&nbsp;&nbsp;&nbsp;</p>
                <button className="btn btn-primary btn-rounded mb-2 mb-md-0 me-md-2" style={{ backgroundColor: "white", borderColor: "black", backgroundImage: "url('/images/czflag.png')", backgroundSize: "cover", color: "rgb(0, 0, 0)" }}><b>Czech</b></button>
                <button className="btn btn-primary btn-rounded mb-2 mb-md-0 me-md-2" style={{ backgroundColor: "white", borderColor: "black", backgroundImage: "url('/images/swit.png')", backgroundSize: "cover", color: "rgb(0, 0, 0)" }}><b>Switzerland</b></button>
                <button className="btn btn-primary btn-rounded mb-2 mb-md-0 me-md-2" style={{ backgroundColor: "white", borderColor: "black", backgroundImage: "url('images/Flag_of_Maldives.svg (1).png')", backgroundSize: "cover", color: "rgb(0, 0, 0)" }}><b>Maldives</b></button>
              </div>
            </div>
          </div>
        </section>
      </div>


      <div className="container" style={{ paddingTop: "50px" }}>
        <h3 style={{ paddingLeft: "13%" }}>Categories</h3>
        <section id="section2" className="container my-4 d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-4">
              <img src="/images/czechico.jpeg" className="img-fluid" alt="Czech food hoska" width="300px" height="300px" />
            </div>
            <div className="col-4">
              <p><b>Food & Drinks</b><br /> Czech cuisine is hearty and flavorful, featuring dishes like tender roast pork, creamy svíčková, and crispy fried cheese. Pair them with world-famous Czech beers like Pilsner and Budvar or sip on Becherovka, a traditional herbal liqueur. From rustic pubs to Prague’s cafes, every bite offers authentic local charm. </p>
              <Link to="/destinations/czech">
                Read more...
              </Link>
            </div>
            <div className="row justify-content-center" style={{ paddingTop: "50px" }}>
              <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center">
                <p className="mb-2 mb-md-0">Look for:&nbsp;&nbsp;&nbsp;</p>
                <button className="btn btn-primary btn-rounded mb-2 mb-md-0 me-md-2" style={{ backgroundColor: "white", borderColor: "black", backgroundImage: "url('/images/earth-day-and-world-environment-day-spring-beautiful-natural-verdant-green-forest-in-summer-generate-ai-free-photo.png')", backgroundSize: "cover", color: "rgb(0, 0, 0)" }}><b>Adventure & Hikes</b></button>
                <button className="btn btn-primary btn-rounded mb-2 mb-md-0 me-md-2" style={{ backgroundColor: "white", borderColor: "black", backgroundImage: "url('/images/diwal.png')", backgroundSize: "cover", color: "rgb(0, 0, 0)" }}><b>Culture Insights</b></button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container-fluid" style={{ marginTop: "75px", paddingTop: "50px", paddingBottom: "50px", backgroundColor: "rgba(0, 0, 0, 0.86)" }}>
        <h3 className="text-center" style={{ color: "white" }}>Sign Up for Our Newsletter</h3>
        <section id="newsletter" className="container my-4 d-flex justify-content-center">
          <div className="row justify-content-center">
            <div className="col-6">
              <form className="d-flex justify-content-center">
                <input type="email" className="form-control me-2" id="email" placeholder="Enter your email" style={{ width: "600px" }} />
                <button type="submit" className="btn btn-primary btn25round" style={{ width: "200px" }} onClick={thanks}>Subscribe</button>
              </form>
            </div>
          </div>
        </section>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

    </>
  )
}

function thanks() {
  window.alert("Thank you for signing up for our Newsletter!!!");
}
