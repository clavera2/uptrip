import React from "react";
import { NavBar } from "./NavBar";
import { Link } from "react-router-dom";
// Category page component.
export function Categories() {
  return (
    <>
      <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact' />
      <div className="container my-4">
        <input type="text" id="searchInput" className="form-control mb-3 searchCards" placeholder="Search cards..." />
        <div className="d-flex justify-content-between formCard">
          <select className="form-select" aria-label="Sort by A-Z">
            <option selected>Sort by A-Z</option>
            <option value="1">A-Z</option>
            <option value="2">Z-A</option>
          </select>
          <select className="form-select" aria-label="Sort by Ratings">
            <option selected>Sort by Ratings</option>
            <option value="1">Highest to Lowest</option>
            <option value="2">Lowest to Highest</option>
          </select>
        </div>
      </div>

      <div className="container">
        <div className="section-title">
          <h2>Food & Drinks</h2>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card mb-3" style={{ maxWidth: "540px", borderRadius: "25px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/japan/ramen.jpg" className="img-fluid rounded-start card-img-full-height card-edge" alt="Ramen" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Japan's finest Ramen</h5>
                    <p className="card-text">Ramen is a popular Japanese noodle soup known for its rich and flavorful broth. You cannot go to Japan without trying!</p>
                    <p className="card-text"><small className="text-muted">Date uploaded 3/10/2024</small></p>
                    <a href="#" className="btn btn-primary go-button">Explore Japan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/switzerland/cordon.jpeg" className="img-fluid rounded-start card-img-full-height" alt="Cordon Bleu" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Cordon Bleu</h5>
                    <p className="card-text">Cordon Bleu is a classic Swiss dish made of meat wrapped around cheese, then breaded and pan-fried or deep-fried.</p>
                    <p className="card-text"><small className="text-muted">Date uploaded 8/10/2023</small></p>
                    <a href="#" className="btn btn-primary go-button">Explore Switzerland</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/czech/imageczech/czech_goulash.jpg" className="img-fluid rounded-start card-img-full-height" alt="Goulash" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Goulash</h5>
                    <p className="card-text">Goulash is a hearty stew of meat and vegetables seasoned with paprika and other spices. It is a popular dish in Czech cuisine.</p>
                    <p className="card-text"><small className="text-muted">Date uploaded 9/4/2021</small></p>
                    <a href="#" className="btn btn-primary go-button">Explore Czech</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="section-title">
          <h2>Activities</h2>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/czech/imageczech/Czech_Staromestske_namesti.jpg" className="img-fluid rounded-start card-img-full-height" alt="Staromestske Namesti" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Explore Staromestske Namesti</h5>
                    <p className="card-text">Staromestske Namesti, or Old Town Square, is a historic square in Prague known for its architecture and vibrant atmosphere.</p>
                    <p className="card-text"><small className="text-muted">Date uploaded 4/10/2024</small></p>
                    <a href="#" className="btn btn-primary go-button">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/maldives/maldivesslideshow.jpg" className="img-fluid rounded-start card-img-full-height" alt="tropical Maldives" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Relax in tropical Maldives</h5>
                    <p className="card-text">The Maldives is known for its crystal-clear waters, white sandy beaches, and luxurious overwater bungalows. It's the perfect destination for relaxation and adventure.</p>
                    <p className="card-text"><small className="text-muted">Date uploaded 5/10/2022</small></p>
                    <a href="#" className="btn btn-primary go-button">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/japan/mtfuji.webp" className="img-fluid rounded-start card-img-full-height" alt="Mt.Fuji" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Explore Mt.Fuji</h5>
                    <p className="card-text">Mount Fuji, Japan's tallest peak, is renowned for its iconic snow-capped summit. It is a favored spot for both hiking and sightseeing, offering breathtaking views and a sense of tranquility.</p>
                    <p className="card-text"><small className="text-muted">Date uploaded 23/3/2020</small></p>
                    <a href="#" className="btn btn-primary go-button">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="section-title">
          <h2>Cultures</h2>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/maldives/maldivesculture.jpg" className="img-fluid rounded-start card-img-full-height" alt="Bodu Beru" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Bodu Beru</h5>
                    <p className="card-text">Bodu Beru is a traditional Maldivian music and dance form, characterized by rhythmic drumming and lively performances. It is an integral part of Maldivian culture and heritage.</p>
                    <p className="card-text"><small className="text-muted">Date uploaded 23/3/2024</small></p>
                    <a href="#" className="btn btn-primary go-button">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/japan/calligraphy.jpg" className="img-fluid rounded-start card-img-full-height" alt="Origami" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Origami</h5>
                    <p className="card-text">Origami is the traditional Japanese art of paper folding, creating intricate designs and figures from a single sheet of paper. It is a cultural symbol of creativity and precision.</p>
                    <p className="card-text"><small className="text-muted">Date uploaded 27/3/2022</small></p>
                    <a href="#" className="btn btn-primary go-button">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card mb-3" style={{ maxWidth: "540px" }}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="/switzerland/swissfall.jpg" className="img-fluid rounded-start card-img-full-height" alt="Origami" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Heidi</h5>
                    <p className="card-text">Heidi is a Swiss work of fiction, a novel about the events in the life of a young girl in her grandfather's care in the Swiss Alps. It is a beloved story that showcases Swiss culture.</p>
                    <p className="card-text"><small className="text-muted">Date uploaded 2/7/2020</small></p>
                    <a href="#" className="btn btn-primary go-button">Go somewhere</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

    </>
  );
}

//Interfaces defining the data shape of each category component.
interface CategoryProp {
  Name: string;
  Image: string;
  Description: string;
  Country: string;
}

interface FoodProp {
  list: CategoryProp[]
}

interface ActivityProp {
  list: CategoryProp[]
}

interface CultureProp {
  list: CategoryProp[]
}

//Food page component
export function Food(foodProp: FoodProp) {
  return (
    <>
      <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact' />
      <div className="foodndrinkTitle">
        <h2>Food & Drink</h2>
        <p>Immerse yourself with the best food and drink around the world during our backpacking days. Our mission is to share these culinary delights with you, bringing a taste of global cuisine to your fingertips.
        </p>
      </div>
      {
        foodProp.list.map((item) => {
          return (
            <div className="card text-white bg-dark mb-3" style={{ borderRadius: '25px', margin: '5%', border: 'none' }}>
              <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                  <img
                    src={item.Image}
                    alt="Cultural Insight"
                    className="img-fluid"
                    style={{ borderRadius: '25px 0 0 25px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="mb-2">
                    </div>
                    <h4 className="card-title">{item.Name}</h4>
                    <p className="card-text">{item.Description}</p>
                    <Link to={`/destinations/${item.Country.toLowerCase()}`} className="btn btn-primary go-button">
                      {`Explore ${item.Country}`}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )
      }
    </>
  )
}

//Activities page component.
export function Activities(actProp: ActivityProp) {
  return (
    <>
      <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact' />
      <div className="foodndrinkTitle">
        <h2>Adventures & Activities</h2>
        <p>Discover the most exciting adventures and activities from around the world. Our mission is to bring you the best experiences, whether you're seeking thrills or looking to explore new cultures and landscapes.
        </p>
      </div>
      {
        actProp.list.map((item) => {
          return (
            <div className="card text-white bg-dark mb-3" style={{ borderRadius: '25px', margin: '5%', border: 'none' }}>
              <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                  <img
                    src={item.Image}
                    alt="Cultural Insight"
                    className="img-fluid"
                    style={{ borderRadius: '25px 0 0 25px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="mb-2">
                    </div>
                    <h4 className="card-title">{item.Name}</h4>
                    <p className="card-text">{item.Description}</p>
                    <Link to={`/destinations/${item.Country.toLowerCase()}`} className="btn btn-primary go-button">
                      {`Explore ${item.Country}`}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )
      }
    </>
  )
}

//culture page component
export function Culture(cultureProp: CultureProp) {
  return (
    <>
      <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact' />
      <div className="foodndrinkTitle">
        <h2>Cultures</h2>
        <p>Explore the rich and diverse cultures from around the world. Our mission is to bring you closer to the traditions, arts, and heritage that define different communities and regions.
        </p>
      </div>
      {
        cultureProp.list.map((item) => {
          return (
            <div className="card text-white bg-dark mb-3" style={{ borderRadius: '25px', margin: '5%', border: 'none' }}>
              <div className="row g-0">
                <div className="col-md-5 d-flex align-items-center justify-content-center">
                  <img
                    src={item.Image}
                    alt="Cultural Insight"
                    className="img-fluid"
                    style={{ borderRadius: '25px 0 0 25px', objectFit: 'cover' }}
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body">
                    <div className="mb-2">
                    </div>
                    <h4 className="card-title">{item.Name}</h4>
                    <p className="card-text">{item.Description}</p>
                    <Link to={`/destinations/${item.Country.toLowerCase()}`} className="btn btn-primary go-button">
                      {`Explore ${item.Country}`}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )
      }
    </>
  )
}
