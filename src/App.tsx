import React from 'react';
import Scroll from './components/Scroll';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Login, Signup} from "./components/Login";
import {Home} from "./components/Home";
import {Destination} from "./components/Destination";
import { Switzerland } from './components/Switzerland';
import {Japan} from "./components/Japan";
import {Maldives} from "./components/Maldives";
import {Czech} from "./components/Czech";
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import {Categories, Food, Activities, Culture} from "./components/Categories";

// This App comonent is going to be the base component for our React application.
/* It handles the routes of specific urls to individual component using react-router-dom library.  
This makes rendering pages faster as React is  Single Page Application (SPA) library.
*/


export const App = () => {
  return (
    <Router>
      <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination countryName={["Switzerland", "Czech", "Japan", "Maldives"]}/>} />
        <Route path="/destinations/switzerland" element={<Switzerland />} />
        <Route path="/destinations/japan" element={<Japan/>} />
        <Route path="/destinations/czech" element={<Czech />} />
        <Route path="/destinations/maldives" element={<Maldives />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/food" element={<Food list={[{Name: "Fondue", Image: "/switzerland/fondue.jpeg", Description: "Fondue in Switzerland may seem clichéd, but it is indelibly woven into the country’s fabric. For centuries, Swiss living in the mountains relied on fondue as a way to use bread and cheese during colder months.", Country: "Switzerland"},
          {Name: "Sushi", Image: "/japan/sushi.jpg", Description: "Sushi is one of Japan's most famous culinary exports. It consists of vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits. Sushi can be presented in various forms, including nigiri (hand-pressed sushi), maki (rolled sushi), and sashimi (sliced raw fish without rice). It is often enjoyed with soy sauce, wasabi, and pickled ginger.", Country: "Japan"},
          {Name: "Saagu Bondibai", Description:"Saagu Bondibai, or Sago Pudding, is a popular dessert in the Maldives made from sago pearls, a starchy substance derived from palm trees. The dish is typically prepared by cooking the sago with coconut milk, sugar, and cardamom, creating a creamy, sweet pudding with a slightly chewy texture. Often served chilled, Saagu Bondibai is a beloved treat in Maldivian households, especially during special occasions and festive gatherings.", Image: "/maldives/maldivesfood2.jpg", Country: "Maldives"},
          {Name: "Czech Hoska", Description: "Czech Hoska is a traditional Czech sweet bread, often enjoyed during festive occasions. It is made with a rich dough that includes raisins, almonds, and sometimes candied fruit, and is typically braided before baking. The bread is lightly sweetened and has a soft, fluffy texture, making it a beloved treat in Czech households.", Image: "/czech/imageczech/czechhoska.jpg", Country: "Czech"}
        ]}/>} />
        <Route path="/categories/adventure" element={<Activities list={[{Name: "Experience the bustling Shibuya Crossing", Image: "/japan/shibuyacrossing.jpg", Description: "The Shibuya Crossing in Tokyo, Japan, is one of the busiest and most iconic pedestrian intersections in the world. Located right outside Shibuya Station, it serves as a vibrant symbol of Tokyo's fast-paced and modern urban life. When the traffic lights turn red in all directions, the entire intersection comes to a halt, and a sea of people from all sides — sometimes thousands at a time — cross in a synchronized yet chaotic flow.The experience of walking the Shibuya Crossing is exhilarating. Surrounded by giant LED screens, flashing advertisements, and towering buildings, the energy is palpable", Country: "Japan"},
          {Name: "Sushi", Image: "/japan/sushi.jpg", Description: "Sushi is one of Japan's most famous culinary exports. It consists of vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits. Sushi can be presented in various forms, including nigiri (hand-pressed sushi), maki (rolled sushi), and sashimi (sliced raw fish without rice). It is often enjoyed with soy sauce, wasabi, and pickled ginger.", Country: "Japan"},
          {Name: "Saagu Bondibai", Description:"Saagu Bondibai, or Sago Pudding, is a popular dessert in the Maldives made from sago pearls, a starchy substance derived from palm trees. The dish is typically prepared by cooking the sago with coconut milk, sugar, and cardamom, creating a creamy, sweet pudding with a slightly chewy texture. Often served chilled, Saagu Bondibai is a beloved treat in Maldivian households, especially during special occasions and festive gatherings.", Image: "/maldives/maldivesfood2.jpg", Country: "Maldives"},
          {Name: "Czech Hoska", Description: "Czech Hoska is a traditional Czech sweet bread, often enjoyed during festive occasions. It is made with a rich dough that includes raisins, almonds, and sometimes candied fruit, and is typically braided before baking. The bread is lightly sweetened and has a soft, fluffy texture, making it a beloved treat in Czech households.", Image: "/czech/imageczech/czechhoska.jpg", Country: "Czech"}
        ]}/>} />
         <Route path="/categories/cultural" element={<Culture list={[{Name: "Culture of Czech", Image: "/czech/imageczech/czechculture.jpg", Description: "Czech culture is a blend of traditions and modern influences, known for its music, literature, and arts. Traditional folk music and dance, such as polka and mazurka, are celebrated, especially in rural areas. Czech cuisine, including goulash and trdelník, is beloved by locals and visitors. Notable festivals like the Strážnice International Folklore Festival and Prague Folklore Days showcase traditional dances, music, and costumes, preserving and promoting Czech cultural heritage.`", Country: "Czech"},
          {Name: "Tropical culture of Maldives", Image: "/maldives/maldivesculture.jpg", Description: "Sushi is one of Japan's most famous culinary exports. It consists of vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits. Sushi can be presented in various forms, including nigiri (hand-pressed sushi), maki (rolled sushi), and sashimi (sliced raw fish without rice). It is often enjoyed with soy sauce, wasabi, and pickled ginger.", Country: "Maldives"},
          {Name: "Culture of Japan", Description:"Saagu Bondibai, or Sago Pudding, is a popular dessert in the Maldives made from sago pearls, a starchy substance derived from palm trees. The dish is typically prepared by cooking the sago with coconut milk, sugar, and cardamom, creating a creamy, sweet pudding with a slightly chewy texture. Often served chilled, Saagu Bondibai is a beloved treat in Maldivian households, especially during special occasions and festive gatherings.", Image: "/japan/calligraphy.jpg", Country: "Japan"},
          {Name: "Swiss culture", Description: "Czech Hoska is a traditional Czech sweet bread, often enjoyed during festive occasions. It is made with a rich dough that includes raisins, almonds, and sometimes candied fruit, and is typically braided before baking. The bread is lightly sweetened and has a soft, fluffy texture, making it a beloved treat in Czech households.", Image: "/switzerland/culture.jpg", Country: "Switzerland"}
        ]}/>} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};


export default App;
