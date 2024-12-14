import React from "react";
import {NavBar} from "./NavBar";
import {Link} from "react-router-dom";




export function Categories() {
    return (
        <>
            <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>
            {/* <header className="bg-light py-5 position-relative">
            <div className="container-fluid p-0">
      <img src="smr.jpg" className="img-fluid header-image" alt="Header Image" />
      <div className="overlay-text">
        <h3>Locations</h3>
        <div>Explore the different locations now!</div>
      </div>
    </div>
  </header> */}

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
      <h2>Food & Drinks</h2>
    </div>
    <div className="row">
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="snow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="snow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="snow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
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
              <img src="snow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="snow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="snow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
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
              <img src="snow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. </p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="snow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="card mb-3" style={{maxWidth: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src="snow.jpg" className="img-fluid rounded-start card-img-full-height" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
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

interface CategoryProp {
    Name: string;
    Image: string;
    Description: string;
    Country: string;
}

interface FoodProp {
  list: CategoryProp[]
}

export function Food() {  
  return (
    <>
    
      <div className="card text-white bg-dark mb-3" style={{ borderRadius: '12px' }}>
      <div className="row g-0">
        {/* Left Image Section */}
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src="/switzerland/fondue.jpeg"
            alt="Cultural Insight"
            className="img-fluid"
            style={{ borderRadius: '12px 0 0 12px', objectFit: 'cover' }}
          />
        </div>

        {/* Right Content Section */}
        <div className="col-md-7">
          <div className="card-body">
            {/* Tags */}
            <div className="mb-2">
              {/* {tags.map((tag, index) => (
                <span key={index} className="badge bg-secondary me-2">
                  {tag}
                </span>
              ))} */}
            </div>

            {/* Title */}
            <h4 className="card-title"></h4>

            {/* Description */}
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
    <div className="card text-white bg-dark mb-3" style={{ borderRadius: '12px' }}>
      <div className="row g-0">
        {/* Left Image Section */}
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src=""
            alt="Cultural Insight"
            className="img-fluid"
            style={{ borderRadius: '12px 0 0 12px', objectFit: 'cover' }}
          />
        </div>

        {/* Right Content Section */}
        <div className="col-md-7">
          <div className="card-body">
            {/* Tags */}
            <div className="mb-2">
              {/* {tags.map((tag, index) => (
                <span key={index} className="badge bg-secondary me-2">
                  {tag}
                </span>
              ))} */}
            </div>

            {/* Title */}
            <h4 className="card-title"></h4>

            {/* Description */}
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
    <div className="card text-white bg-dark mb-3" style={{ borderRadius: '12px' }}>
      <div className="row g-0">
        {/* Left Image Section */}
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src=""
            alt="Cultural Insight"
            className="img-fluid"
            style={{ borderRadius: '12px 0 0 12px', objectFit: 'cover' }}
          />
        </div>

        {/* Right Content Section */}
        <div className="col-md-7">
          <div className="card-body">
            {/* Tags */}
            <div className="mb-2">
              {/* {tags.map((tag, index) => (
                <span key={index} className="badge bg-secondary me-2">
                  {tag}
                </span>
              ))} */}
            </div>

            {/* Title */}
            <h4 className="card-title"></h4>

            {/* Description */}
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
    <div className="card text-white bg-dark mb-3" style={{ borderRadius: '12px' }}>
      <div className="row g-0">
        {/* Left Image Section */}
        <div className="col-md-5 d-flex align-items-center justify-content-center">
          <img
            src=""
            alt="Cultural Insight"
            className="img-fluid"
            style={{ borderRadius: '12px 0 0 12px', objectFit: 'cover' }}
          />
        </div>

        {/* Right Content Section */}
        <div className="col-md-7">
          <div className="card-body">
            {/* Tags */}
            <div className="mb-2">
              {/* {tags.map((tag, index) => (
                <span key={index} className="badge bg-secondary me-2">
                  {tag}
                </span>
              ))} */}
            </div>

            {/* Title */}
            <h4 className="card-title"></h4>

            {/* Description */}
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}



// export function Food(foodProp: foodProp) {
//     return (
//         <>
//         <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>
//             <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={foodProp.foodImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>{}</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>
// </section>

// <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>
// </section>


// <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>
// </section>


// <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>
// </section>
//         </>
//     )
// }

// export function Activities() {
//     return (
//         <>
//         <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>
//             <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>

//     <div className="activitiesContent">
//         <div className="activitiesTitle">
//             <h3>Must try activities in {countryProp.countryName}</h3>
//         </div>
//         <div className="activitiesGallery">
//             <div className="activity">
//                 <img src={countryProp.activityImages[0]} alt="Tokyo Skytree" />
//                 <p>{countryProp.activityText[0]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[1]} alt="Shibuya Crossing" />
//                 <p>{countryProp.activityText[1]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[2]} alt="Sensoji Temple" />
//                 <p>{countryProp.activityText[2]}</p>
//             </div>
//         </div>
//     </div>
// </section>

// <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>

//     <div className="activitiesContent">
//         <div className="activitiesTitle">
//             <h3>Must try activities in {countryProp.countryName}</h3>
//         </div>
//         <div className="activitiesGallery">
//             <div className="activity">
//                 <img src={countryProp.activityImages[0]} alt="Tokyo Skytree" />
//                 <p>{countryProp.activityText[0]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[1]} alt="Shibuya Crossing" />
//                 <p>{countryProp.activityText[1]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[2]} alt="Sensoji Temple" />
//                 <p>{countryProp.activityText[2]}</p>
//             </div>
//         </div>
//     </div>
// </section>

// <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>

//     <div className="activitiesContent">
//         <div className="activitiesTitle">
//             <h3>Must try activities in {countryProp.countryName}</h3>
//         </div>
//         <div className="activitiesGallery">
//             <div className="activity">
//                 <img src={countryProp.activityImages[0]} alt="Tokyo Skytree" />
//                 <p>{countryProp.activityText[0]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[1]} alt="Shibuya Crossing" />
//                 <p>{countryProp.activityText[1]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[2]} alt="Sensoji Temple" />
//                 <p>{countryProp.activityText[2]}</p>
//             </div>
//         </div>
//     </div>
// </section>

// <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>

//     <div className="activitiesContent">
//         <div className="activitiesTitle">
//             <h3>Must try activities in {countryProp.countryName}</h3>
//         </div>
//         <div className="activitiesGallery">
//             <div className="activity">
//                 <img src={countryProp.activityImages[0]} alt="Tokyo Skytree" />
//                 <p>{countryProp.activityText[0]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[1]} alt="Shibuya Crossing" />
//                 <p>{countryProp.activityText[1]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[2]} alt="Sensoji Temple" />
//                 <p>{countryProp.activityText[2]}</p>
//             </div>
//         </div>
//     </div>
// </section>

//         </>
//     )
// }

// export function Culture() {
//     return (
//         <>
//         <NavBar heading1='Home' heading2='Destinations' heading3='Categories' heading4='Gallery' heading5='About us' heading6='Contact'/>
//             <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>

//     <div className="activitiesContent">
//         <div className="activitiesTitle">
//             <h3>Must try activities in {countryProp.countryName}</h3>
//         </div>
//         <div className="activitiesGallery">
//             <div className="activity">
//                 <img src={countryProp.activityImages[0]} alt="Tokyo Skytree" />
//                 <p>{countryProp.activityText[0]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[1]} alt="Shibuya Crossing" />
//                 <p>{countryProp.activityText[1]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[2]} alt="Sensoji Temple" />
//                 <p>{countryProp.activityText[2]}</p>
//             </div>
//         </div>
//     </div>
// </section>

// <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>

//     <div className="activitiesContent">
//         <div className="activitiesTitle">
//             <h3>Must try activities in {countryProp.countryName}</h3>
//         </div>
//         <div className="activitiesGallery">
//             <div className="activity">
//                 <img src={countryProp.activityImages[0]} alt="Tokyo Skytree" />
//                 <p>{countryProp.activityText[0]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[1]} alt="Shibuya Crossing" />
//                 <p>{countryProp.activityText[1]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[2]} alt="Sensoji Temple" />
//                 <p>{countryProp.activityText[2]}</p>
//             </div>
//         </div>
//     </div>
// </section>

// <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>

//     <div className="activitiesContent">
//         <div className="activitiesTitle">
//             <h3>Must try activities in {countryProp.countryName}</h3>
//         </div>
//         <div className="activitiesGallery">
//             <div className="activity">
//                 <img src={countryProp.activityImages[0]} alt="Tokyo Skytree" />
//                 <p>{countryProp.activityText[0]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[1]} alt="Shibuya Crossing" />
//                 <p>{countryProp.activityText[1]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[2]} alt="Sensoji Temple" />
//                 <p>{countryProp.activityText[2]}</p>
//             </div>
//         </div>
//     </div>
// </section>

// <section id="adventuresAndActivities">
//     <div className="adventuresContent">
//         <img src={countryProp.adventureImage} alt="Japanese Calligraphy" />
//         <div className="adventuresText">
//             <span>Culture</span>
//             <span>Adventure</span>
//             <h3>Cultural insights</h3>
//             <p>{countryProp.culturalInsight}
//             </p>
//         </div>
//     </div>

//     <div className="activitiesContent">
//         <div className="activitiesTitle">
//             <h3>Must try activities in {countryProp.countryName}</h3>
//         </div>
//         <div className="activitiesGallery">
//             <div className="activity">
//                 <img src={countryProp.activityImages[0]} alt="Tokyo Skytree" />
//                 <p>{countryProp.activityText[0]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[1]} alt="Shibuya Crossing" />
//                 <p>{countryProp.activityText[1]}</p>
//             </div>
//             <div className="activity">
//                 <img src={countryProp.activityImages[2]} alt="Sensoji Temple" />
//                 <p>{countryProp.activityText[2]}</p>
//             </div>
//         </div>
//     </div>
// </section>

//         </>
//     )
// }