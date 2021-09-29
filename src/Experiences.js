import antiCounterfeit from "./svg/antiCounterfeit.svg";
import marketing from "./svg/marketing.svg";
import productTransparency from "./svg/productTransparency.svg";
import rating from "./svg/rating.svg";

const Experiences = [
  {
    id: 1,
    icon: `${antiCounterfeit}`,
    title: "Anit Counterfiet",
    text: "Every product unit contains a unique code fortified with Blockchain technology, reassuring customers the authenticity of your products.",
  },

  {
    id: 2,
    icon: `${marketing}`,
    title: "Marketing",
    text: "Now your product is able to become the entry point for various marketing activities.",
  },

  {
    id: 3,
    icon: `${productTransparency}`,
    title: "Product Transparency",
    text: "Share more about your product's origin and ingredients to win over your consumers hearts",
  },

  {
    id: 4,
    icon: `${rating}`,
    title: "Rating & Testimony",
    text: "Your consumers are more likely to buy your product once they discover how many people love it",
  },
];

export default Experiences;
