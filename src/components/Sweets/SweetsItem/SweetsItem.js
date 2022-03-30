import { useContext } from "react";

import SweetsItemForm from "./SweetsItemForm";
import classes from "./SweetsItem.module.css";
import CartContext from "../../../store/cart-context";

const SweetsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;
  console.log(props.photo);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      photo: props.photo,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.sweet}>
      <div>
        <h3>{props.name}</h3>
        <img
          src={props.photo}
          alt={"image of " + props.name}
          className={classes.img}
        ></img>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <SweetsItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default SweetsItem;
