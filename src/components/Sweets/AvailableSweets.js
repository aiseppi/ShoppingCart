import Card from "../UI/Card";
import SweetsItem from "../Sweets/SweetsItem/SweetsItem";
import classes from "./AvailableSweets.module.css";

const AVAILABLE_SWEETS = [
  {
    id: "m1",
    name: "Red Velvet Cake",
    description:
      'The moist Southern classic with cream cheese frosting. The outside of each cake is adorned with chocolate shavings and crumbles of red velvet cake. This 6" cake serves 6-8 people.',
    price: 38.99
  },
  {
    id: "m2",
    name: "Carrot Cake",
    description:
      'Made with freshly shredded carrots and finely chopped walnuts, this carrot cake is frosted with cream cheese icing. This 6" cake serves 6-8 people.',
    price: 38.99
  },
  {
    id: "m3",
    name: "Vanilla Confetti Cake",
    description:
      'Vanilla cake with a burst of sprinkles layered with a sweet vanilla confetti icing and topped with rainbow sprinkles. This 6" cake serves 6-8 people.',
    price: 34.99
  },
  {
    id: "m4",
    name: "Chocolate Fudge Cake",
    description:
      'A quintessential chocolate cake, iced with a rich chocolate fudge frosting and adorned with chocolate sprinkles. This 6" cake serves 6-8 people. ',
    price: 34.99
  },
  {
    id: "m5",
    name: "Rainbow Cake",
    description:
      'Six layers of rainbow-colored vanilla cake filled high with a sweet vanilla icing and covered with rainbow sprinkles. This 6" cake serves 6-8 people. ',
    price: 38.99
  },
  {
    id: "m6",
    name: "Assorted Cupcakes 24 pack",
    description:
      "Our signature 24-pack assortment flavors include 12 vanilla cream filled & 12 chocolate cream filled cupcakes.",
    price: 24.99
  },
  {
    id: "m7",
    name: "Apple Pie",
    description:
      'Perfect apple filling inside a buttery, flaky shell with a buttery crumb topping. Each pie measures 6" and serves 6 people.',
    price: 31.99
  },
  {
    id: "m8",
    name: "Pumpkin Pie",
    description:
      'Creamy, flavorful, perfectly spiced Pumpkin filling inside a buttery, flaky shell on the outside. Each pie measures 6" and serves 6 people.',
    price: 31.99
  },
  {
    id: "m9",
    name: "Chocolate Chip Cookies 12 pack",
    description:
      "Our take on the classic chocolate chip cookie. This bakery favorite is a guaranteed crowd pleaser.",
    price: 19.99
  },
  {
    id: "m10",
    name: "Black & White Cookies 12 pack",
    description:
      "16 soft, cake-like cookies covered half and half with vanilla and chocolate icing.",
    price: 19.99
  },
  {
    id: "m11",
    name: "Cannoli 12 pack",
    description:
      "Golden crispy shells filled with a signature recipe of ricotta cheese, hints of cinnamon & chocolate chips.",
    price: 35.99
  },
  {
    id: "m12",
    name: "Chocolate Covered Cannoli 12 pack",
    description:
      "Golden crispy shells dipped in chocolate, and filled with a signature recipe of ricotta cheese, hints of cinnamon & chocolate chips.",
    price: 37.99
  }
];

const AvailableSweets = () => {
  const sweetsList = AVAILABLE_SWEETS.map((sweet) => (
    <SweetsItem
      key={sweet.id}
      id={sweet.id}
      name={sweet.name}
      description={sweet.description}
      price={sweet.price}
    />
  ));

  return (
    <section className={classes.sweets}>
      <Card>
        <ul>{sweetsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableSweets;
