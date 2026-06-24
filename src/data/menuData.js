import classicAamras from "../assets/classic-aamras.jpg";
import kesarAamras from "../assets/kesar-aamras.jpg";
import aamrasPuri from "../assets/aamras-puri.jpg";
import mangoLassi from "../assets/mango-lassi.jpg";
import kulfi from "../assets/kulfi.jpg";
import shrikhand from "../assets/shrikhand.jpg";

const menuItems = [
  {
    id: 1,
    name: "Classic Aamras",
    description: "Pure alphonso mango pulp, chilled to perfection",
    price: "₹99",
    category: "classic",
    image: classicAamras,
  },
  {
    id: 2,
    name: "Kesar Aamras",
    description: "Premium kesar mangoes with a rich golden colour",
    price: "₹149",
    category: "premium",
    image: kesarAamras,
  },
  {
    id: 3,
    name: "Aamras Puri",
    description: "Traditional combo with fluffy hot puris",
    price: "₹179",
    category: "combo",
    image: aamrasPuri,
  },
  {
    id: 4,
    name: "Mango Lassi",
    description: "Creamy yogurt blended with fresh mango pulp",
    price: "₹119",
    category: "drinks",
    image: mangoLassi,
  },
  {
    id: 5,
    name: "Aamras Kulfi",
    description: "Frozen mango dessert on a stick",
    price: "₹89",
    category: "dessert",
    image: kulfi,
  },
  {
    id: 6,
    name: "Mango Shrikhand",
    description: "Thick strained yogurt with mango and cardamom",
    price: "₹129",
    category: "dessert",
    image: shrikhand,
  },
];

export default menuItems;