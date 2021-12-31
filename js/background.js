const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg"
];

const BACKGROUND_IMG = "background_img";


const chosenImage = images[Math.floor(Math.random() * images.length)]; 

const container = document.querySelector(".container");

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add(BACKGROUND_IMG);
container.prepend(bgImage);
// document.body.prepend(bgImage);

