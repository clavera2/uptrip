import React from "react";
import {NavBar} from "./NavBar";
import {Country} from "./Country";

const propValues = {
    countryName: "Japan",
    backgroundImage: "/images/japan/japanBackground.jpg", // string
    introductoryParagraph: "Discover Japan as it offers the perfect harmony of ancient traditions and modern marvels. From the beauty of temples and garden to the futuristic neon-lite city life of Tokyo and Osaka, Japan is a country you don't want to miss out upon.",
    properties: ["Asia", "City", "12 min read"],
    slideshowImages: ["/images/japan/temple1.jpg", "/images/japan/tokyoCityscape.jpg", "/images/japan/temple2.jpg", "/images/japan/tokyoStreet.jpg"],
    iconContent: "Japan, an island nation in East Asia, is renowned for its rich cultural heritage, stunning landscapes, and advanced technology. From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers a unique blend of tradition and modernity. Visitors can explore ancient shrines, enjoy world-className cuisine, and experience the country's natural beauty, including the iconic Mount Fuji.",
    factHeader: "Japan - Ching chong of the world",
    facts: ["Japan is an island country in East Asia, located in the northwest Pacific Ocean.", 
        "It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.",
        "Japan is a stratovolcanic archipelago consisting of about 6,852 islands.",
        "The four largest islands are Honshu, Hokkaido, Kyushu, and Shikoku, which make up about ninety-seven percent of Japan's land area and often are referred to as home islands.",
        "The country is divided into 47 prefectures in eight regions, with Hokkaido being the northernmost prefecture and Okinawa being the southernmost one."],
    factImage: "/images/japan/mapofjapanfr.jpeg",
    factImageAlt: "Regions and prefectures of Japan",
    quote: "“Japan is the most intoxicating place for me. The Japanese culture fascinates me: the food, the dress, the manners and the traditions. It’s the travel experience that has moved me the most.”",
    quoter: "Roman Coppola",
    adventureImage:"/images/japan/calligraphy.jpg",
    activityImages: ["/images/japan/tokyoskytree.webp", "/images/japan/shibuyacrossing.jpg", "/images/japan/sensoji.jpg"],
    activityText: ["Visit the Tokyo Skytree", "Experience the bustling Shibuya Crossing", "Explore the historic Sensoji Temple"],
    culturalInsight: "Japan's culture is a unique blend of traditional and modern influences. It is known for its deep respect for nature, as seen in practices like tea ceremonies and flower arranging (ikebana). Traditional arts such as calligraphy, origami, and kabuki theater are still widely practiced. Japanese cuisine, including sushi, ramen, and tempura, is celebrated worldwide.",
    foodName1: "Ramen",
    foodDescription1: "Ramen is a popular Japanese noodle soup that has gained international fame. It consists of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork (chashu), nori (dried seaweed), menma (bamboo shoots), and scallions.",
    foodName2: "Sushi",
    foodDescription2: "Sushi is one of Japan's most famous culinary exports. It consists of vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits. Sushi can be presented in various forms, including nigiri (hand-pressed sushi), maki (rolled sushi), and sashimi (sliced raw fish without rice). It is often enjoyed with soy sauce, wasabi, and pickled ginger."
}

export function Japan() {
    return (
        <>
            <Country countryName="Japan" 
            introductionParagraph="Discover Japan as it offers the perfect harmony of ancient traditions and modern marvels. From the beauty of temples and garden to the futuristic neon-lite city life of Tokyo and Osaka, Japan is a country you don't want to miss out upon."
            backgroundIamge={"/japan/japanBackground.jpg"}
            slideshowImages={["/japan/temple1.jpg", "/japan/tokyoCityscape.jpg", "/japan/temple2.jpg", "/japan/tokyoStreet.jpg"]}
            properties={["Asia", "City", "12 min read"]}
            introContent="Japan, an island nation in East Asia, is renowned for its rich cultural heritage, stunning landscapes, and advanced technology. From the bustling streets of Tokyo to the serene temples of Kyoto, Japan offers a unique blend of tradition and modernity. Visitors can explore ancient shrines, enjoy world-className cuisine, and experience the country's natural beauty, including the iconic Mount Fuji."
            factHeader="Japan - Ching chong of the world"
            facts={["Japan is an island country in East Asia, located in the northwest Pacific Ocean.", 
                "It is bordered on the west by the Sea of Japan, and extends from the Sea of Okhotsk in the north toward the East China Sea and Taiwan in the south.",
                "Japan is a stratovolcanic archipelago consisting of about 6,852 islands.",
                "The four largest islands are Honshu, Hokkaido, Kyushu, and Shikoku, which make up about ninety-seven percent of Japan's land area and often are referred to as home islands.",
                "The country is divided into 47 prefectures in eight regions, with Hokkaido being the northernmost prefecture and Okinawa being the southernmost one."]}
            factImage="/japan/mapofjapanfr.jpeg"
            quote="“Japan is the most intoxicating place for me. The Japanese culture fascinates me: the food, the dress, the manners and the traditions. It’s the travel experience that has moved me the most.”"
            quoter="Roman Coppola"
            adventureImage="/japan/calligraphy.jpg"
            culturalInsight="Japan's culture is a unique blend of traditional and modern influences. It is known for its deep respect for nature, as seen in practices like tea ceremonies and flower arranging (ikebana). Traditional arts such as calligraphy, origami, and kabuki theater are still widely practiced. Japanese cuisine, including sushi, ramen, and tempura, is celebrated worldwide."
            activityImages={["/japan/newSkytree.jpg","/japan/shibuyacrossing.jpg", "/japan/sensoji.jpg"]}
            activityText={["Visit the Tokyo Skytree", "Experience the bustling Shibuya Crossing", "Explore the historic Sensoji Temple"]}
            foodName1="Ramen"
            foodDescription1="Ramen is a popular Japanese noodle soup that has gained international fame. It consists of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and uses toppings such as sliced pork (chashu), nori (dried seaweed), menma (bamboo shoots), and scallions."
            foodImage1="/japan/ramen.jpg"
            foodName2="Sushi"
            foodDescription2="Sushi is one of Japan's most famous culinary exports. It consists of vinegared rice accompanied by various ingredients such as seafood, vegetables, and occasionally tropical fruits. Sushi can be presented in various forms, including nigiri (hand-pressed sushi), maki (rolled sushi), and sashimi (sliced raw fish without rice). It is often enjoyed with soy sauce, wasabi, and pickled ginger."
            foodImage2="/japan/sushi.jpg"
            getInspiredImages={["/japan/tokyoCityscape.jpg", "/japan/shibuyacrossing.jpg", "/japan/mtfuji.webp"]}
            exploreCountriesText={["Czech", "Switzerland", "Maldives"]}
            exporeCountriesImage={["/czech/czech.jpg", "/switzerland/switzerland.jpg", "/maldives/maldivesslideshow.jpg"]}
            />
            
        </>
    )
}
