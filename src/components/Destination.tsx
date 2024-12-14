import React from "react";
import { Link} from "react-router-dom";
import { NavBar } from "./NavBar";
import {Login} from "./Login";
import {Home} from "./Home";

export interface RegionProp {
    // RegionName: string;
    // countryTitle: string;
    // description: string;
    // imageList: string[];
    // date: Date;
    RegionName: string;
    cardProp: CardProp[];
}

interface destinationProp {
  countryName: string[];
}

export interface CardProp {
    CardTitle: string;
    description: string;
    image: string;
    date: Date;
}

export function Card(cardProp: CardProp) {
  return (
    <>
    <div className="col-sm-4">
    <div className="card mb-3" style={{maxWidth: "540px"}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={cardProp.image} className="img-fluid rounded-start card-img-full-height" alt="..."/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{cardProp.CardTitle}</h5>
            <p className="card-text">{cardProp.description}</p>
            <p className="card-text"><small className="text-muted">{`Date uploaded: ${cardProp.date.toUTCString()}`}</small></p>
            {/* <a href="#" className="btn btn-primary">Explore Now</a> */}
          <Link to={`/destinations/${cardProp.CardTitle.toLowerCase()}`}>
            <button className="btn btn-outline-primary">Explore Now</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}

export function Region(regionProp: RegionProp) {
  // let cards = [
  //   <Card CardTitle={cardProp.CardTitle} description={cardProp.description} image={cardProp.image} date={cardProp.date}/>,
  //     <Card CardTitle={cardProp.CardTitle} description={cardProp.description} image={cardProp.image} date={cardProp.date}/>,
  //     <Card CardTitle={cardProp.CardTitle} description={cardProp.description} image={cardProp.image} date={cardProp.date}/>
  // ]
    return (
  <div className="container">
    <div className="section-title">
      <h2>{regionProp.RegionName}</h2>
    </div>
    <div className="row">
    {/* <Card CardTitle={regionProp.cardProp[0].CardTitle} description={regionProp.cardProp[0].description} image='/logo.jpg' date={new Date()}/>
    <Card CardTitle={regionProp.cardProp[1].CardTitle} description={regionProp.cardProp[1].CardTitle} image='/logo.jpg' date={new Date()}/>
    <Card CardTitle={regionProp.cardProp[2].CardTitle} description={regionProp.cardProp[2].CardTitle} image='/logo.jpg' date={new Date()}/> */}{
      regionProp.cardProp.map((card) => <Card CardTitle={card.CardTitle} description={card.description} image={card.image} date={new Date()}/>)
    }
    {/* <Card CardTitle='Spain' description='spain is a country in europe' image='/logo.jpg' date={new Date()}/> */}
    </div>
  </div> 
  );
}

export function Destination(destProp: destinationProp) {
    return (
        <>
        <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>
    <div className="container-fluid p-0">
      <img src="/images/destination.jpg" className="img-fluid header-image" alt="Header Image" />
      <div className="overlay-text">
        <h3>Locations</h3>
        <div>Explore the different locations now!</div>
      </div>
    </div>

  <div className="container my-4">
    <input type="text" id="searchInput" className="form-control mb-3" placeholder="Search cards..." />
    <div className="d-flex justify-content-between">
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
      <h2>Europe</h2>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/switzerland/switzerland.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{destProp.countryName[0]}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to={`/destinations/${destProp.countryName[0]}`}>
                <button className="btn btn-primary">Explore {destProp.countryName[0]}</button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/czech/imageczech/czechvillage.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{destProp.countryName[1]}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to={`/destinations/${destProp.countryName[1]}`}>
                <button className="btn btn-primary">Explore {destProp.countryName[1]}</button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className="container">
    <div className="section-title">
      <h2>Asia</h2>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/japan/japan1.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{destProp.countryName[2]}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to={`/destinations/${destProp.countryName[2]}`}>
                <button className="btn btn-primary">Explore {destProp.countryName[2]}</button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="/maldives/slideshow2.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{destProp.countryName[3]}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <Link to={`/destinations/${destProp.countryName[3]}`}>
                <button className="btn btn-primary">Explore {destProp.countryName[3]}</button>
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

        </>
    )
}