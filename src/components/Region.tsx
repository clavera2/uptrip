import React from "react";

export interface RegionProp {
    // RegionName: string;
    // countryTitle: string;
    // description: string;
    // imageList: string[];
    // date: Date;
    RegionName: string;
    cardProp: CardProp[];
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
            <a href="#" className="btn btn-primary">Go somewhere</a>
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