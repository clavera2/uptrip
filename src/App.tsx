import React from 'react';
import Scroll from './components/Scroll';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Signup } from "./components/Login";
import { Home } from "./components/Home";
import { Destination } from "./components/Destination";
import { Switzerland } from './components/Switzerland';
import { Japan } from "./components/Japan";
import { Maldives } from "./components/Maldives";
import { Czech } from "./components/Czech";
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Categories, Food, Activities, Culture } from "./components/Categories";

// This App comonent is going to be the base component for our React application.
/* It handles the routes of specific urls to individual component using react-router-dom library.  
This makes rendering pages faster as React is  Single Page Application (SPA) library.
*/


export const App = () => {
  return (
    <Router>
      <Scroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destination countryName={["Switzerland", "Czech", "Japan", "Maldives"]} />} />
        <Route path="/destinations/switzerland" element={<Switzerland />} />
        <Route path="/destinations/japan" element={<Japan />} />
        <Route path="/destinations/czech" element={<Czech />} />
        <Route path="/destinations/maldives" element={<Maldives />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/food" element={<Food list={[{ Name: "Fondue", Image: "/switzerland/fondue.jpeg", Description: "Fondue in Switzerland may seem clichéd, but it is indelibly woven into the country’s fabric. For centuries, Swiss living in the mountains relied on fondue as a way to use bread and cheese during colder months. The dish is prepared by melting cheese in a communal pot over a small burner and dipping bread into the cheese using long-stemmed forks. Fondue is more than just a meal; it is a social event that brings people together. The tradition of fondue dates back to the 18th century and has become a symbol of Swiss culture. Today, it is enjoyed in homes and restaurants across Switzerland, especially during the winter months. The experience of sharing a pot of fondue with friends and family is a cherished Swiss tradition.", Country: "Switzerland" },
        { Name: "Sushi", Image: "/japan/sushi.jpg", Description: "Sushi is one of Japan's most famous culinary exports. It consists of vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits. Sushi can be presented in various forms, including nigiri (hand-pressed sushi), maki (rolled sushi), and sashimi (sliced raw fish without rice). It is often enjoyed with soy sauce, wasabi, and pickled ginger. Sushi has a long history in Japan, dating back to the 8th century. It was originally a method of preserving fish by fermenting it with rice. Over time, the dish evolved into the sushi we know today. Sushi is not only a delicious meal but also an art form, with chefs spending years perfecting their skills. The presentation of sushi is as important as its taste, with each piece carefully crafted to be visually appealing.", Country: "Japan" },
        { Name: "Saagu Bondibai", Description: "Saagu Bondibai, or Sago Pudding, is a popular dessert in the Maldives made from sago pearls, a starchy substance derived from palm trees. The dish is typically prepared by cooking the sago with coconut milk, sugar, and cardamom, creating a creamy, sweet pudding with a slightly chewy texture. Often served chilled, Saagu Bondibai is a beloved treat in Maldivian households, especially during special occasions and festive gatherings. The dessert is a reflection of the Maldivian culture, which is heavily influenced by its tropical environment and the abundance of coconut palms. Saagu Bondibai is not only a delicious treat but also a symbol of Maldivian hospitality and tradition. It is often served to guests as a gesture of welcome and is a staple at celebrations and festivals.", Image: "/maldives/maldivesfood2.jpg", Country: "Maldives" },
        { Name: "Czech Hoska", Description: "Czech Hoska is a traditional Czech sweet bread, often enjoyed during festive occasions. It is made with a rich dough that includes raisins, almonds, and sometimes candied fruit, and is typically braided before baking. The bread is lightly sweetened and has a soft, fluffy texture, making it a beloved treat in Czech households. Hoska is often enjoyed during Christmas and Easter, and its preparation is a cherished family tradition. The recipe for Hoska has been passed down through generations, with each family adding their own unique touch. The bread is not only delicious but also a symbol of Czech culture and heritage. It is often served with butter and jam, and its sweet aroma fills the house during the holidays, creating a warm and festive atmosphere.", Image: "/czech/imageczech/czechhoska.jpg", Country: "Czech" }
        ]} />} />
        <Route path="/categories/adventure" element={<Activities list={[{ Name: "Experience the bustling Shibuya Crossing", Image: "/japan/shibuyacrossing.jpg", Description: "The Shibuya Crossing in Tokyo, Japan, is one of the busiest and most iconic pedestrian intersections in the world. Located right outside Shibuya Station, it serves as a vibrant symbol of Tokyo's fast-paced and modern urban life. When the traffic lights turn red in all directions, the entire intersection comes to a halt, and a sea of people from all sides — sometimes thousands at a time — cross in a synchronized yet chaotic flow. The experience of walking the Shibuya Crossing is exhilarating. Surrounded by giant LED screens, flashing advertisements, and towering buildings, the energy is palpable. The crossing is a popular spot for tourists and locals alike, and it has been featured in numerous films, TV shows, and advertisements. It is a must-visit destination for anyone traveling to Tokyo, offering a unique glimpse into the city's dynamic and bustling atmosphere.", Country: "Japan" },
        { Name: "The known Staroměstské náměstí", Image: "/czech/staro.jpg", Description: "Staroměstské náměstí, or Old Town Square, is a historic square in the heart of Prague, Czech Republic. It is renowned for its stunning architecture, including the Gothic Church of Our Lady before Týn and the Baroque St. Nicholas Church. The square is a vibrant hub of activity, with street performers, cafes, and markets. It is also home to the famous Astronomical Clock, which draws crowds every hour for its animated show. The square has been a central gathering place for centuries and is a must-visit for anyone exploring Prague.", Country: "Czech" },
        { Name: "The magic Switzerland water", Description: "Switzerland is known for its pristine lakes and rivers, which are a major attraction for tourists and locals alike. The country's water bodies are renowned for their clarity and beauty, offering opportunities for swimming, boating, and other recreational activities. The Swiss take great pride in maintaining the cleanliness and purity of their water, which is considered some of the best in the world. The lakes and rivers are not only a source of natural beauty but also play a crucial role in the country's ecosystem and economy.", Image: "/switzerland/switzerland.jpg", Country: "Switzerland" }
        ]} />} />
        <Route path="/categories/cultural" element={<Culture list={[{ Name: "Culture of Czech", Image: "/czech/imageczech/czechculture.jpg", Description: "Czech culture is a blend of traditions and modern influences, known for its music, literature, and arts. Traditional folk music and dance, such as polka and mazurka, are celebrated, especially in rural areas. Czech cuisine, including goulash and trdelník, is beloved by locals and visitors. Notable festivals like the Strážnice International Folklore Festival and Prague Folklore Days showcase traditional dances, music, and costumes, preserving and promoting Czech cultural heritage. The Czech Republic is also known for its rich history and architecture, with numerous castles, churches, and historical sites. The country's cultural heritage is a source of pride for its people, and efforts are made to preserve and promote it for future generations.", Country: "Czech" },
        { Name: "Tropical culture of Maldives", Image: "/maldives/maldivesculture.jpg", Description: "The Maldives, an archipelago in the Indian Ocean, is renowned for its stunning natural beauty and vibrant culture. The tropical culture of the Maldives is deeply influenced by its geography and history. Traditional Maldivian music and dance, such as bodu beru, are integral to the cultural fabric of the islands. The cuisine, heavily reliant on fish and coconut, reflects the island lifestyle. Festivals and celebrations, such as Eid and National Day, are marked with traditional performances and feasts. The Maldivian culture is also characterized by its hospitality and warmth, with a strong emphasis on community and family. The islands' unique cultural heritage is preserved through oral traditions, crafts, and rituals, making the Maldives a fascinating destination for cultural exploration.", Country: "Maldives" },
        { Name: "Culture of Japan", Description: "Japanese culture is a rich tapestry of traditions and modern influences. It is known for its unique blend of ancient customs and contemporary innovations. Traditional arts such as tea ceremony, calligraphy, and ikebana (flower arranging) are still practiced and celebrated. Japanese cuisine, including sushi, tempura, and ramen, is renowned worldwide. Festivals like Hanami (cherry blossom viewing) and Matsuri (traditional festivals) are integral to Japanese culture, showcasing traditional music, dance, and costumes. The Japanese value harmony, respect, and discipline, which are reflected in their daily lives and social interactions. The country's cultural heritage is preserved through its temples, shrines, and historical sites, making Japan a captivating destination for cultural enthusiasts.", Image: "/japan/calligraphy.jpg", Country: "Japan" },
        { Name: "Swiss culture", Description: "Swiss culture is a blend of German, French, Italian, and Romansh influences, reflecting the country's diverse linguistic and cultural heritage. Switzerland is known for its traditions, such as yodeling, alphorn playing, and folk dances. Swiss cuisine, including fondue, raclette, and chocolate, is celebrated for its quality and variety. Festivals like Fasnacht (carnival) and Alpabzug (cattle descent) are important cultural events, showcasing traditional costumes, music, and customs. The Swiss value punctuality, precision, and cleanliness, which are evident in their daily lives and societal norms. The country's cultural heritage is preserved through its museums, historical sites, and cultural institutions, making Switzerland a fascinating destination for cultural exploration.", Image: "/switzerland/culture.jpg", Country: "Switzerland" }
        ]} />} />
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
