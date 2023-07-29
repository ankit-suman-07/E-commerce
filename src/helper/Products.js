import demo from "../assets/demo.jpg";
import img1 from "../assets/img_1.jpg";
import img2 from "../assets/img_2.jpg";
import img3 from "../assets/img_3.jpg";
import img4 from "../assets/img_4.jpg";
import img5 from "../assets/img_5.jpg";
import img6 from "../assets/img_6.jpg";
import img7 from "../assets/img_7.jpg";
import img8 from "../assets/img_8.jpg";
import img9 from "../assets/img_9.jpg";
import img10 from "../assets/img_10.jpg";
import img11 from "../assets/img_11.png";
import img12 from "../assets/img_12.jpg";
import img13 from "../assets/img_13.jpg";
import img14 from "../assets/img_14.jpg";
import img15 from "../assets/img_15.png";
import img16 from "../assets/img_16.jpg";
import img17 from "../assets/img_17.jpg";
import img18 from "../assets/img_18.jpg";
import img19 from "../assets/img_19.jpg";
import img20 from "../assets/img_20.jpg";
import img21 from "../assets/img_21.jpg";
import img22 from "../assets/img_22.jpg";
import img23 from "../assets/img_23.jpg";
import img24 from "../assets/img_24.jpeg";
import img25 from "../assets/img_25.jpg";
import img26 from "../assets/img_26.jpg";
import img27 from "../assets/img_27.jpg";
import img28 from "../assets/img_28.jpg";
import img29 from "../assets/img_29.jpg";
import img30 from "../assets/img_30.jpg";



function getRandomRating() {
    return (Math.random() * (5.0 - 3.2) + 3.2).toFixed(1);
  }

export const PRODUCTS = [
    {
      id: 1,
      productName: "Serenity Isle Island",
      price: 270000000,
      productImage: img1,
      owner: "Jeff Bezos",
      rating: getRandomRating(),
      tags: ["all", "island"],
    },
    {
      id: 2,
      productName: "Phoenix Feather Wand",
      price: 1800000000,
      productImage: img2,
      owner: "Elon Musk",
      rating: getRandomRating(),
      tags: ["all", "rare"],
    },
    {
      id: 3,
      productName: "Gulfstream G700",
      price: 250000000,
      productImage: img3,
      owner: "Warren Buffett",
      rating: getRandomRating(),
      tags: ["all", "jet"],
    },
    {
      id: 4,
      productName: "Eclipse Yacht",
      price: 700000000,
      productImage: img4,
      owner: "Larry Page",
      rating: getRandomRating(),
      tags: ["all", "yacht"],
    },
    {
      id: 5,
      productName: "Platinum Residency",
      price: 1580000000,
      productImage: img5,
      owner: "Bernard Arnault",
      rating: getRandomRating(),
      tags: ["all", "mansion"],
    },
    {
      id: 6,
      productName: "Moonlight Cove Island",
      price: 280000000,
      productImage: img6,
      owner: "Amancio Ortega",
      rating: getRandomRating(),
      tags: ["all", "island"],
    },
    {
      id: 7,
      productName: "Enchanted Mirror",
      price: 130000000,
      productImage: img7,
      owner: "Larry Ellison",
      rating: getRandomRating(),
      tags: ["all", "rare"],
    },
    {
      id: 8,
      productName: "Bombardier Global 7500",
      price: 220000000,
      productImage: img8,
      owner: "Sergey Brin",
      rating: getRandomRating(),
      tags: ["all", "jet"],
    },
    {
      id: 9,
      productName: "Dubai Yacht",
      price: 750000000,
      productImage: img9,
      owner: "Carlos Slim Helu",
      rating: getRandomRating(),
      tags: ["all", "yacht"],
    },
    {
      id: 10,
      productName: "Stark Tower",
      price: 960000000,
      productImage: img10,
      owner: "Tony Stark",
      rating: getRandomRating(),
      tags: ["all", "mansion"],
    },
    {
      id: 11,
      productName: "Azure Dream Island",
      price: 300000000,
      productImage: img11,
      owner: "Mukesh Ambani",
      rating: getRandomRating(),
      tags: ["all", "island"],
    },
    {
      id: 12,
      productName: "Astral Compass",
      price: 105000000,
      productImage: img12,
      owner: "Alice Walton",
      rating: getRandomRating(),
      tags: ["all", "rare"],
    },
    {
      id: 13,
      productName: "Dassault Falcon 8X",
      price: 260000000,
      productImage: img13,
      owner: "Michael Bloomberg",
      rating: getRandomRating(),
      tags: ["all", "jet"],
    },
    {
      id: 14,
      productName: "Topaz Yacht",
      price: 560000000,
      productImage: img14,
      owner: "Bernard Arnault",
      rating: getRandomRating(),
      tags: ["all", "yacht"],
    },
    {
      id: 15,
      productName: "Luxuria Manor",
      price: 1750000000,
      productImage: img15,
      owner: "Francoise Bettencourt Meyers",
      rating: getRandomRating(),
      tags: ["all", "mansion"],
    },
    {
      id: 16,
      productName: "Celestial Retreat Island",
      price: 320000000,
      productImage: img16,
      owner: "Carlos Slim Helu",
      rating: getRandomRating(),
      tags: ["all", "island"],
    },
    {
      id: 17,
      productName: "Crystal Veil",
      price: 120000000,
      productImage: img17,
      owner: "Warren Buffett",
      rating: getRandomRating(),
      tags: ["all", "rare"],
    },
    {
      id: 18,
      productName: "Boeing Business Jet 747-8",
      price: 300000000,
      productImage: img18,
      owner: "Amancio Ortega",
      rating: getRandomRating(),
      tags: ["all", "jet"],
    },
    {
        id: 19,
        productName: "Al Said Yacht",
        price: 580000000,
        productImage: img19,
        owner: "Mark Cuban",
        rating: getRandomRating(),
        tags: ["all", "yacht"],
      },
      {
        id: 20,
        productName: "Wayne Maynor",
        price: 952000000,
        productImage: img20,
        owner: "Bruce Wayne",
        rating: getRandomRating(),
        tags: ["all", "mansion"],
      },
      {
        id: 21,
        productName: "Celestial Crown Island",
        price: 280000000,
        productImage: img21,
        owner: "Jeff Bezos",
        rating: getRandomRating(),
        tags: ["all", "island"],
      },
      {
        id: 22,
        productName: "Eternal Timepiece",
        price: 110000000,
        productImage: img22,
        owner: "Francoise Bettencourt Meyers",
        rating: getRandomRating(),
        tags: ["all", "rare"],
      },
      {
        id: 23,
        productName: "Gulfstream G650ER",
        price: 280000000,
        productImage: img23,
        owner: "Mark Cuban",
        rating: getRandomRating(),
        tags: ["all", "jet"],
      },
      {
        id: 24,
        productName: "Ocean Victory Yacht",
        price: 640000000,
        productImage: img24,
        owner: "Elon Musk",
        rating: getRandomRating(),
        tags: ["all", "yacht"],
      },
      {
        id: 25,
        productName: "Royal Paradise Villa",
        price: 890000000,
        productImage: img25,
        owner: "Mark Zuckerberg",
        rating: getRandomRating(),
        tags: ["all", "mansion"],
      },
      {
        id: 26,
        productName: "Velvet Shores Island",
        price: 300000000,
        productImage: img26,
        owner: "David Thomson",
        rating: getRandomRating(),
        tags: ["all", "island"],
      },
      {
        id: 27,
        productName: "Arcane Spellbook",
        price: 1500000000,
        productImage: img27,
        owner: "Phil Knight",
        rating: getRandomRating(),
        tags: ["all", "rare"],
      },
      {
        id: 28,
        productName: "Airbus ACJ319neo",
        price: 240000000,
        productImage: img28,
        owner: "Steve Ballmer",
        rating: getRandomRating(),
        tags: ["all", "jet"],
      },
      {
        id: 29,
        productName: "Lady Moura Yacht",
        price: 680000000,
        productImage: img29,
        owner: "David Thomson",
        rating: getRandomRating(),
        tags: ["all", "yacht"],
      },
      {
        id: 30,
        productName: "Emerald Vista Mansion",
        price: 910000000,
        productImage: img30,
        owner: "Steve Walton",
        rating: getRandomRating(),
        tags: ["all", "mansion"],
      },
      // Continue adding the rest of the products...
];