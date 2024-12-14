import React from "react";
import {NavBar} from "./NavBar";
import {Link} from "react-router-dom";

/* THE MAJOR COUNTRY COMPONENT IN ALL INDIVIDUAL DESTINATION COMPONENT
*/

interface CountryProp {
    countryName: string;
    backgroundIamge: string;
    backgroundImageAlt?: string;
    slideshowImages: string[]
    introductionParagraph: string;
    properties: string[];
    introContent: string;
    factHeader: string;
    facts: string[];
    factImage: string;
    factImageAlt?: string;
    readonly exploreCountriesText: [string, string, string]; //Do not change this prop when passing in prop
    quote: string;
    quoter: string;
    adventureImage: string;
    culturalInsight: string;
    activityImages: string[]
    activityText: string[]
    foodName1: string;
    foodDescription1: string;
    foodImage1: string;
    foodName2: string;
    foodDescription2: string;
    foodImage2: string;
    getInspiredImages: string[];
    exporeCountriesImage: [string,string,string];
}

//THE BASE COMPONENT FOR ALL DESTINATION COMPONENT

export function Country(countryProp: CountryProp) {
    return (
        <>
        <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>
            <section id="title" className="titleclassName">
        <div className="titleBackground">
            <img src={countryProp.backgroundIamge} alt={countryProp.backgroundImageAlt} />
        </div>

        <div className="titleContent">
            <div className="titleText">
                <h1>{countryProp.countryName}</h1>
                <p>{countryProp.introductionParagraph}</p>
                <div className="titleTags">
                    {countryProp.properties.map((property) => <span>{property}</span>)}
                </div>
                <button>Explore Now</button>
            </div>

            <div className="titleSlideshow" style={{maxWidth: "250px", margin: "auto",marginTop: "10%",marginRight: "5%", marginBottom: "5%"}}>
                    <div id="carouselExampleIndicators" className="carousel slide slideshow" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={countryProp.slideshowImages[0]} style={{borderRadius: "25px;"}} className="d-block w-100" alt="Temple of Japan 1" />
                    </div>
                <div className="carousel-item">
                    <img src={countryProp.slideshowImages[1]} style={{borderRadius: "25px;"}} className="d-block w-100" alt="Cityscape of Tokyo" />
                    </div>
                    <div className="carousel-item">
                    <img src={countryProp.slideshowImages[2]} style={{borderRadius: "25px;"}} className="d-block w-100" alt="Temple of Japan 2" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
                </div>
            </div>
        </div>
</section>

<section id="japanIntro">
    <article className="introContent">
        <p>{countryProp.introContent}</p>
    </article>
</section>



<section id="japanOverview">
    <div className="overviewContent">
        <div className="overviewImage">
            <img src={countryProp.factImage} alt={countryProp.factImageAlt} />
        </div>
        <div className="overviewText">
            <h3>{countryProp.factHeader}</h3>
            <ul>
                {countryProp.facts.map((fact) => <li>{fact}</li>)}
            </ul>
        </div>
    </div>

    <div className="quote">
        <h2>{countryProp.quote}</h2>
        <p>– {countryProp.quoter}</p>
    </div>
</section>



<section id="adventuresAndActivities">
    <div className="adventuresContent">
        <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
        <div className="adventuresText">
            <span>Culture</span>
            <span>Adventure</span>
            <h3>Cultural insights</h3>
            <p>{countryProp.culturalInsight}
            </p>
        </div>
    </div>

    <div className="activitiesContent">
        <div className="activitiesTitle">
            <h3>Must try activities in {countryProp.countryName}</h3>
        </div>
        <div className="activitiesGallery">
            <div className="activity">
                <img src={countryProp.activityImages[0]} alt="Tokyo Skytree" />
                <p>{countryProp.activityText[0]}</p>
            </div>
            <div className="activity">
                <img src={countryProp.activityImages[1]} alt="Shibuya Crossing" />
                <p>{countryProp.activityText[1]}</p>
            </div>
            <div className="activity">
                <img src={countryProp.activityImages[2]} alt="Sensoji Temple" />
                <p>{countryProp.activityText[2]}</p>
            </div>
        </div>
    </div>
</section>

<section id="FoodnDrink">
    <div className="foodTitle">
        <h2>Food and Drink</h2>
    </div>
    <div className="ramenContent">
        <div className="ramenText">
            <span>Must-have</span>
            <span>$</span>
            <h3>{countryProp.foodName1}</h3>
            <p>{countryProp.foodDescription1}
            </p>
        </div>
        <img src={countryProp.foodImage1} alt="Soy Sauce Ramen" />
    </div>

    <div className="sushiContent">
        <img src={countryProp.foodImage2} alt="Sushi" />
        <div className="sushiText">
            <span>Luxury</span>
            <span>$~$$$</span>
            <h3>{countryProp.foodName2}</h3>
            <p>{countryProp.foodDescription2}
            </p>
        </div>
    </div>
</section>

<section id="japanGallery">
    <div className="galleryTitle">
        <h2>Get inspired!</h2>
    <div id="japanGalleryCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#japanGalleryCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#japanGalleryCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#japanGalleryCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#japanGalleryCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
            {countryProp.getInspiredImages.map((image) => {
                return (
                    <>
                        <div className="carousel-item active">
                            <img src={image} className="d-block w-100" alt="Mount Fuji" />
                        </div>  
                    </>
                );
            })}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#japanGalleryCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#japanGalleryCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
    </div>
</section>

<section id="otherDestinations">
    <div className="otherDestinationsContent">
        <div className="otherDestinationsTitle">
            <h2>Explore other destinations</h2>
        </div>
        <div className="otherDestinationsGallery">
            <div className="otherDestination">
                <img src={countryProp.exporeCountriesImage[0]} alt="Italy" />
                <h3>{countryProp.exploreCountriesText[0]}</h3>
                <Link to={`/destinations/${countryProp.exploreCountriesText[0].toLowerCase()}`}>
                    <button>Learn more</button>
                </Link>
            </div>
            <div className="otherDestination">
                <img src={countryProp.exporeCountriesImage[1]} alt="Egypt" />
                <h3>{countryProp.exploreCountriesText[1]}</h3>
                <Link to={`/destinations/${countryProp.exploreCountriesText[1].toLowerCase()}`}>
                    <button>Learn more</button>
                </Link>
            </div>
            <div className="otherDestination">
                <img src={countryProp.exporeCountriesImage[2]} alt="Australia" />
                <h3>{countryProp.exploreCountriesText[2]}</h3>
                <Link to={`/destinations/${countryProp.exploreCountriesText[2].toLowerCase()}`}>
                    <button>Learn more</button>
                </Link>
            </div>
        </div>
    </div>
</section>



{/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script> */}

        </>
    );
}