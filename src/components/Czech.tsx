import React from "react";
import {NavBar} from "./NavBar";
import {Country} from "./Country";

export function Czech() {
    return (
        <>
            <Country countryName="Czech" 
            introductionParagraph="Discover Czechia, a country where history meets modernity. From the charming streets of Prague to the picturesque landscapes of Bohemia and Moravia, Czechia offers a rich cultural experience and stunning architecture that you won't want to miss."
            slideshowImages={["/czech/imageczech/czechcity.jpg", "/czech/imageczech/czechprague.jpg", "/czech/imageczech/czechforest.jpg", "/czech/imageczech/czechrooftops.jpg"]}
            backgroundIamge={"/czech/imageczech/czechbackground.jpeg"}
            properties={["Europe", "City", "14 min read"]} 
            introContent="Czechia, located in the heart of Europe, is known for its historical cities, beautiful landscapes, and vibrant culture. From the medieval charm of Prague to the rolling hills of Moravia, Czechia offers a diverse range of experiences. Visitors can explore ancient castles, enjoy traditional Czech cuisine, and immerse themselves in the country's rich history and natural beauty."
            factHeader="Czechia - Heart of Europe"
            facts={["Czechia, also known as the Czech Republic, is a landlocked country in Central Europe.", 
                "It is bordered by Germany to the west, Austria to the south, Slovakia to the east, and Poland to the northeast.", 
                "The country is known for its ornate castles, native beers, and long history.",
                "Prague, the capital city, is home to the historic Prague Castle, Charles Bridge, and Old Town Square with its medieval Astronomical Clock."
                ,"Czechia is divided into 14 regions, with Prague being the largest city and the political, cultural, and economic center of the country."
            ]}
            factImage="/czech/imageczech/czechmap.jpg"
            quote="“Czechia is a land of fairy tales, with its enchanting castles, charming villages, and rich history. It’s a place where every corner tells a story.”"
            quoter="Jeff"
            adventureImage="/czech/imageczech/czechculture.jpg"
            culturalInsight="Czech culture is a blend of traditions and modern influences, known for its music, literature, and arts. Traditional folk music and dance, such as polka and mazurka, are celebrated, especially in rural areas. Czech cuisine, including goulash and trdelník, is beloved by locals and visitors. Notable festivals like the Strážnice International Folklore Festival and Prague Folklore Days showcase traditional dances, music, and costumes, preserving and promoting Czech cultural heritage."
            activityImages={["/czech/imageczech/Czech_Staromestske_namesti.jpg",
                "/czech/imageczech/czechobecnidum.jpg",
                "/czech/imageczech/czechcharles.jpg"]}
            activityText={["Explore the historic Staromestske Namesti",
                "Visit the stunning Obecní dům",
                "Walk across the iconic Charles Bridge"]}
            foodName1="Beef Goulash"
            foodDescription1="Czech beef goulash is possibly the most popular dish in Prague. You’ll find it on most restaurant menus, and it goes very well with beer! Beef goulash, one of the most popular Czech dishes.Goulash consists of tender bits of beef in a rich sauce, served with bread dumplings. It’s a very filling meal and a true winter warmer!"
            foodImage1="/czech/imageczech/czech_goulash.jpg"
            foodName2="Czech Hoska"
            foodDescription2="Czech Hoska is a traditional Czech sweet bread, often enjoyed during festive occasions. It is made with a rich dough that includes raisins, almonds, and sometimes candied fruit, and is typically braided before baking. The bread is lightly sweetened and has a soft, fluffy texture, making it a beloved treat in Czech households."
            foodImage2="/czech/imageczech/czechhoska.jpg"
            getInspiredImages={["/switzerland/switzerland.jpg","/switzerland/switzerland.jpg","/switzerland/switzerland.jpg"]}
            exploreCountriesText={["Japan", "Switzerland", "Maldives"]}
            exporeCountriesImage={["/japan/japan.jpg", "/switzerland/switzerland.jpg", "/maldives/maldivesslideshow.jpg"]}
            />
        </>
    )
}