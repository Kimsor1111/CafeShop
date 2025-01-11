import { faList, faPhone, faTag } from "@fortawesome/free-solid-svg-icons";
import FeatureCafe from "./../../assets/images/featureTop1.png";
import FeatureDesert from "./../../assets/images/featureTop2.png";
import FeatureMid1 from "./../../assets/images/featureMid1.jpg";
import FeatureMid2 from "./../../assets/images/featureMid2.jpg";
import featurePrd1 from "./../../assets/images/featurePrd1.jpg";
import featurePrd2 from "./../../assets/images/featurePrd2.jpg";
import featurePrd3 from "./../../assets/images/featurePrd3.jpg";
import featurePrd4 from "./../../assets/images/featurePrd4.jpg";
import featurePrd5 from "./../../assets/images/featurePrd5.jpg";
import featurePrd6 from "./../../assets/images/featurePrd6.jpg";
import featureBottomImg from "./../../assets/images/featureBottom.jpg";
export const featureTop = [
  {
    title:
      "Brewing Happiness, One Cup of Coffee a Day Making Your Life Brighter.",
    des: "Welcome to a café where every sip tells a story. Whether you're looking for a morning boost, a midday escape, or an evening wind-down.",
    img: FeatureCafe,
  },
  {
    title: "Fudgy Brownie Cake - A Taste of Chocolate With Creamy Cheesecake.",
    des: "Indulge in the irresistible charm of our desserts, crafted to satisfy every sweet craving. Perfect for sharing or savoring solo—experience sweetness in every moment. Treat yourself today!",
    img: FeatureDesert,
  },
];

export const featureCard = [
  {
    icon: faTag,
    title: "Enjoy 15% Off!",
    des: `Get 15% off on all your favorite items! Whether you're craving a delicious dessert, a refreshing drink, or a cozy coffee moment, now is the perfect time to indulge. Hurry—this offer won't last long! Visit us today and savor the savings. Don't miss it out!`,
  },
  {
    icon: faPhone,
    title: "Get in Touch with Us!",
    des: `We'd love to hear from you! Whether you have questions, feedback, or just want to say hello, feel free to reach out. Visit us for a cozy coffee break or drop us a message anytime. Your perfect cup of coffee is just a conversation away!`,
  },
  {
    icon: faList,
    title: "Our Delicious Creations!",
    des: "Indulge in a wide variety of handcrafted beverages and treats made with love and the finest ingredients. From rich, aromatic coffees to refreshing drinks and mouthwatering desserts, we have something for every craving. Explore our menu and treat yourself today!",
  },
];
export const featureMid = [
  {
    title: "Cozy Corner Café",
    des: "Step into a warm, inviting atmosphere at Cozy Corner Café, where every visit feels like home. From freshly brewed coffee to delectable pastries and delicious sandwiches, our café offers a perfect escape for your daily dose of comfort.",
    img: FeatureMid1,
  },
  {
    title: "Cherry Chocolate Bliss Cake",
    des: "Indulge in the perfect fusion of rich chocolate and sweet cherries with our Cherry Chocolate Bliss Cake! This delightful treat features layers of moist chocolate cake, filled with a tangy cherry compote and topped with a smooth chocolate ganache.",
    img: FeatureMid2,
  },
];

export const featurePrd = [
  {
    id: 46,
    img: featurePrd1,
    name: "Iced Cuppuchino",
    type: "Drink - Cafe",
    price: "$",
    pricedot: ".$$",
    total: "$$$",
  },
  {
    id: 21,
    img: featurePrd2,
    name: "Caramel Coffee",
    type: "Drink - Chocolate",
    price: "$",
    pricedot: ".$$",
    total: "$$$",
  },
  {
    id: 48,
    img: featurePrd3,
    name: "Iced Latte",
    type: "Drink - Cafe",
    price: "$",
    pricedot: ".$$",
    total: "$$$",
  },
  {
    id: 79,
    img: featurePrd4,
    name: "Almond Croissant",
    type: "Food - Bakery",
    price: "$",
    pricedot: ".$$",
    total: "$$$",
  },
  {
    id: 91,
    img: featurePrd5,
    name: "Cheese & Tomato Toastie",
    type: "Food - Lunch",
    price: "$",
    pricedot: ".$$",
    total: "$$$",
  },
  {
    id: 110,
    img: featurePrd6,
    name: "Chocolate Chip Cookie",
    type: "Food - Sweet Treats",
    price: "$",
    pricedot: ".$$",
    total: "$$$",
  },
];

export const featureBottom = {
  title: "Caffeine & Cartoons: Anime Café Vibes",
  des: "Depict a stunning, dreamlike landscape where the real world seamlessly blends into anime aesthetics. Streets would have an anime-inspired design with exaggerated proportions.",
  img: featureBottomImg,
};
