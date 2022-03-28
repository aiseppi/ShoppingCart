import Card from "../UI/Card";
import SweetsItem from "../Sweets/SweetsItem/SweetsItem";
import classes from "./AvailableSweets.module.css";

const AVAILABLE_SWEETS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99
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
