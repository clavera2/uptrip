import React from "react";
import {NavBar} from "./NavBar";
import { Country } from "./Country";

export function Maldives() {
    return (
        <>
            <Country countryName="Maldives" 
                      backgroundIamge={"/maldives/maldivesbackground.jpg"}
                      introductionParagraph="The Maldives is a tropical paradise located in the Indian Ocean, southwest of Sri Lanka and India. Renowned for its crystal-clear waters, pristine white-sand beaches, and vibrant coral reefs, it is composed of 26 atolls with over 1,000 islands. The country is celebrated for its luxury resorts, marine biodiversity, and unique geography, making it a dream destination for travelers and a global leader in marine conservation."
                      slideshowImages={["/maldives/maldivesslideshow.jpg", "/maldives/slideshow2.jpg", "/maldives/slideshow3.jpg"]}
                      properties={["Tropical", "Vacation", "Adventure"]}
                      introContent="Maldives, officially known as the Republic of Maldives, is a small island nation in South Asia, situated in the Indian Ocean. It consists of 26 natural atolls made up of over 1,000 coral islands, known for their stunning turquoise lagoons, powdery white beaches, and diverse marine life. With its capital, Malé, the Maldives is both a popular luxury travel destination and a nation rich in cultural heritage, blending influences from South Asia, Africa, and the Middle East. Renowned for its vibrant coral reefs, world-class diving, and sustainable tourism practices, the Maldives is also among the countries most vulnerable to climate change, making its preservation efforts globally significant."
                      factHeader="Maldives - Pearl of the Indian Ocean."
                      facts={["The Maldives is made up of 26 atolls, consisting of more than 1,000 coral islands spread over 90,000 square kilometers, making it one of the world's most dispersed countries.", 
                        "The capital city, Malé, is one of the smallest national capitals in the world, with a population of over 150,000 people, which is a significant portion of the country's total population.",
                        "The Maldives is a global luxury travel destination, known for its high-end resorts, overwater bungalows, and world-class snorkeling and diving experiences."
                    ]}
                      factImage="/maldives/maldivesfactimage.jpg"
                      quote="The Maldives are like no other place. A paradise of clear, turquoise waters, pristine beaches, and an abundance of marine life."
                      quoter="Michael Palin"
                      adventureImage="/maldives/maldivesculture.jpg"
                      culturalInsight="Maldivian culture is a blend of South Asian, Arab, and African influences, shaped by its history of trade and Islamic heritage. The Maldives' official religion is Islam, which plays a central role in daily life, with many customs and traditions revolving around Islamic practices and festivals. The Maldivian language, Dhivehi, is derived from Indo-Aryan roots, and traditional music, dance, and crafts, such as bodu beru drumming and lacquer work, reflect the island's rich cultural history. The Maldives also has a strong oral tradition, with stories passed down through generations, often centered around the sea, which is integral to the nation's way of life and identity."
                      activityImages={["/maldives/activity1.jpg","/switzerland/swissmountain.jpg","/switzerland/museum.jpg"]}
                      activityText={["Explore the Rhine falls","Take a hike on the Matterhorn mountain","Visit the Swiss museum"]}
                      foodName1="Boshi Mashuni (Banana Flower Salad)"
                      foodDescription1="Boshi Mashuni, or Banana Flower Salad, is a traditional Maldivian dish made from the tender petals of the banana flower. This refreshing salad typically includes ingredients like grated coconut, onions, chilies, and lime, offering a delightful combination of textures and flavors."
                      foodImage1="/maldives/maldivesfood1.jpg"
                      foodName2="Saagu Bondibai"
                      foodDescription2="Saagu Bondibai, or Sago Pudding, is a popular dessert in the Maldives made from sago pearls, a starchy substance derived from palm trees. The dish is typically prepared by cooking the sago with coconut milk, sugar, and cardamom, creating a creamy, sweet pudding with a slightly chewy texture. Often served chilled, Saagu Bondibai is a beloved treat in Maldivian households, especially during special occasions and festive gatherings."
                      foodImage2="/maldives/maldivesfood2.jpg"
                      getInspiredImages={["/switzerland/switzerland.jpg","/switzerland/switzerland.jpg","/switzerland/switzerland.jpg"]}
                      exploreCountriesText={["Switzerland", "Japan", "Czech"]}
                      exporeCountriesImage={["/switzerland/switzerland.jpg", "/japan/japan.jpg", "/czech/czech.jpg"]}
                    />   
        </>
    )
}
