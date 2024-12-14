import React from "react";
import {Country} from "./Country";
import { NavBar } from "./NavBar";

export function Switzerland() {
    return (
        <>
        <Country countryName="Switzerland" 
          backgroundIamge={"/switzerland/swissbackground.jpg"}
          introductionParagraph="Adventure enthusiasts will find plenty to do in Switzerland. From skiing and snowboarding in the Swiss Alps to hiking trails like the Matterhorn and Jungfrau, there’s no shortage of activities. In summer, enjoy paragliding, mountain biking, or exploring the crystal-clear lakes."
          slideshowImages={["/switzerland/swiss.jpg", "/switzerland/swissSlideshow.jpg", "/switzerland/swissSlideshow2.jpg"]}
          properties={["Swiss", "Mountains", "Adventure"]}
          introContent="Switzerland is a small, landlocked country in Central Europe, known for its stunning Alpine landscapes, high quality of life, and rich cultural diversity. It borders Germany, France, Italy, Austria, and Liechtenstein. With Bern as its capital and Zurich as its largest city, Switzerland is renowned for its neutrality, thriving banking industry, and being a hub for diplomacy, hosting organizations like the United Nations and the Red Cross.

Switzerland is famous for its precision engineering, including luxury watches, its world-class chocolate, and a strong tradition of democracy. Its political system is unique, with a direct democracy that allows citizens to vote frequently on national issues. The country boasts four official languages—German, French, Italian, and Romansh—reflecting its multicultural identity. Known for its breathtaking mountains, clean cities, and iconic landmarks like the Matterhorn, Switzerland attracts millions of visitors annually."
          factHeader="Switzerland - Land of the Alps"
          facts={["Switzerland is famous for its chocolate, and it’s no surprise since the country consumes more chocolate per capita than any other in the world—an average Swiss person eats about 11 kilograms (24 pounds) of chocolate annually!", 
            "Switzerland has maintained a policy of neutrality since 1815 and has not been involved in any international wars since then. Despite being neutral, the country has a well-trained militia and is home to several international organizations like the United Nations Office and the Red Cross.", 
            "Switzerland has not one, not two, but four official languages: German, French, Italian, and Romansh. Depending on the region, you’ll hear a different language, showcasing the country’s incredible cultural diversity."]}
          factImage="/switzerland/switzerland.jpg"
          quote="Switzerland is simply a large, lumpy, solid rock with a thin skin of grass stretched over it."
          quoter="Mark Twain"
          adventureImage="/switzerland/culture.jpg"
          culturalInsight="Switzerland is a culturally rich and diverse country, shaped by its multilingual heritage and strong traditions. It has four official languages—German, French, Italian, and Romansh—reflecting its geographic position at the crossroads of Europe. Each linguistic region contributes its own customs, cuisine, and festivals, creating a mosaic of cultural identities within one nation.

The Swiss are known for their values of neutrality, precision, and punctuality, traits often linked to their world-famous industries like watchmaking and banking. Traditional Swiss culture emphasizes community, with folk music, yodeling, and alphorn performances being integral to rural festivals.

Additionally, Switzerland has a deep appreciation for nature, which is reflected in its environmental policies and outdoor lifestyles, with activities like skiing, hiking, and mountaineering being central to Swiss life."
          activityImages={["/switzerland/swissfall.jpg","/switzerland/swissmountain.jpg","/switzerland/museum.jpg"]}
          activityText={["Explore the Rhine falls","Take a hike on the Matterhorn mountain","Visit the Swiss museum"]}
          foodName1="Cordon Bleu"
          foodDescription1="A cordon bleu or schnitzel cordon bleu is a dish of meat wrapped around cheese (or with cheese filling), then breaded and pan-fried or deep-fried."
          foodImage1="/switzerland/cordon.jpeg"
          foodName2="Fondue"
          foodDescription2="Fondue in Switzerland may seem clichéd, but it is indelibly woven into the country’s fabric. For centuries, Swiss living in the mountains relied on fondue as a way to use bread and cheese during colder months."
          foodImage2="/switzerland/fondue.jpeg"
          getInspiredImages={["/switzerland/switzerland.jpg","/switzerland/switzerland.jpg","/switzerland/switzerland.jpg"]}
          exploreCountriesText={["Maldives", "Japan", "Czech"]}
          exporeCountriesImage={["/maldives/maldivesslideshow.jpg", "/japan/japan.jpg", "/czech/czech.jpg"]}
        />

        </>
        

    )
}