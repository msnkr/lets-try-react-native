import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpg";

const images = [image1, image2, image3, image4, image5];

const RandomImage = () => {
  return images[Math.floor(Math.random() * images.length)];
};

export default RandomImage;
