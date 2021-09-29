import filePlus from "./svg/filePlus.svg";
import star from "./svg/star.svg";
import fileBlock from "./svg/fileBlock.svg";
import locationPin from "./svg/locationPin.svg";

const concerns = [
  {
    id: 1,
    icon: `${filePlus}`,
    title: "What are the Ingredients?",
    text: "Does it contain ingredients that might trigger allergic reactions?",
  },
  {
    id: 2,
    icon: `${star}`,
    title: "User Review/Rating?",
    text: "Past buyers, how was their experiences?",
  },
  {
    id: 3,
    icon: `${fileBlock}`,
    title: "Is this Fake?",
    text: "I'm not sure whether this is original or fake...",
  },
  {
    id: 4,
    icon: `${locationPin}`,
    title: "Where is this from?",
    text: "I'll be paranoid if I don't know wher it's originated from",
  },
];

export default concerns;
