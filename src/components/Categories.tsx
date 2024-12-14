import React from "react";
import {NavBar} from "./NavBar";
import {Link} from "react-router-dom";
import "./categorystyle.css";
// Category page component.
export function Categories() {
    return (
        <>
            <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>
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
        <div className="card mb-3" style={{maxWidth: "540px", borderRadius: "25px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/japan/ramen.jpg" className="img-fluid rounded-start card-img-full-height card-edge" alt="Ramen" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Japan's finest Ramen</h5>
                <p className="card-text">Ramen is a popular Japanese noodle soup known for its rich and flavorful broth. You cannot go to Japan without trying.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary go-button">Explore Japan</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/switzerland/cordon.jpeg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Cordon Bleu</h5>
                <p className="card-text">Cordon Bleu is a classic Swiss dish made of meat wrapped around cheese, then breaded and pan-fried or deep-fried.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary go-button">Explore Switzerland</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/czech/imageczech/czech_goulash.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Goulash</h5>
                <p className="card-text">Goulash is a hearty stew of meat and vegetables seasoned with paprika and other spices. It is a popular dish in Czech cuisine.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/czech/imageczech/Czech_Staromestske_namesti.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Explore Staromestske Namesti</h5>
                <p className="card-text">Staromestske Namesti, or Old Town Square, is a historic square in Prague known for its architecture and vibrant atmosphere.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary go-button">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/maldives/maldivesslideshow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Relax in tropical Maldives</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary go-button">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/japan/mtfuji.webp" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Explore Mt.Fuji</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/maldives/maldivesculture.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Bodu Beru</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary go-button">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/japan/calligraphy.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Origami</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary go-button">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/switzerland/swissfall.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Heidi</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
    <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>

      { 
      foodProp.list.map( (item) => {
        return (
      <div className="card text-white bg-dark mb-3" style={{ borderRadius: '12px' }}>
      <div className="row g-0">
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src={item.Image}
            alt="Cultural Insight"
            className="img-fluid"
            style={{ borderRadius: '12px 0 0 12px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <div className="mb-2">
            </div>
            <h4 className="card-title">{item.Name}</h4>
            <p className="card-text">{item.Description}</p>
            <Link to={`/destinations/${item.Country.toLowerCase()}`}>
                {`Learn more about ${item.Country}`}
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
    <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>

      { 
      actProp.list.map( (item) => {
        return (
      <div className="card text-white bg-dark mb-3" style={{ borderRadius: '12px' }}>
      <div className="row g-0">
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src={item.Image}
            alt="Cultural Insight"
            className="img-fluid"
            style={{ borderRadius: '12px 0 0 12px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <div className="mb-2">
            </div>
            <h4 className="card-title">{item.Name}</h4>
            <p className="card-text">{item.Description}</p>
            <Link to={`/destinations/${item.Country.toLowerCase()}`}>
                {`Learn more about ${item.Country}`}
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
    <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>

      { 
      cultureProp.list.map( (item) => {
        return (
      <div className="card text-white bg-dark mb-3" style={{ borderRadius: '12px' }}>
      <div className="row g-0">
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src={item.Image}
            alt="Cultural Insight"
            className="img-fluid"
            style={{ borderRadius: '12px 0 0 12px', objectFit: 'cover' }}
          />
        </div>
        <div className="col-md-7">
          <div className="card-body">
            <div className="mb-2">
            </div>
            <h4 className="card-title">{item.Name}</h4>
            <p className="card-text">{item.Description}</p>
            <Link to={`/destinations/${item.Country.toLowerCase()}`}>
                {`Learn more about ${item.Country}`}
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
