import reward from "./svg/reward.jpg";
import review from "./svg/review.jpg";
import qrScan from "./svg/qrScan.jpg";
import traking from "./svg/traking.jpg";
import contact from "./svg/contact.jpg";

const features = [
  {
    id: 1,
    title: "Product Review",
    text: "Scan our non-cloneable QR code on the product recieved to verify the product authenticity easily",
    image: `${review}`,
  },

  {
    id: 2,
    title: "Rewards",
    text: "Scan our non-cloneable QR code on the product recieved to verify the product authenticity easily",
    image: `${reward}`,
  },

  {
    id: 3,
    title: "QR code Scanning",
    text: "Scan our non-cloneable QR code on the product recieved to verify the product authenticity easily",
    image: `${qrScan}`,
  },

  {
    id: 4,
    title: "Tracing",
    text: "Scan our non-cloneable QR code on the product recieved to verify the product authenticity easily",
    image: `${traking}`,
  },

  {
    id: 5,
    title: "Contact Manufacturer",
    text: "Scan our non-cloneable QR code on the product recieved to verify the product authenticity easily",
    image: `${contact}`,
  },
];

const slideTabs = [1, 2, 3, 4, 5];

export default features;

export { slideTabs };
