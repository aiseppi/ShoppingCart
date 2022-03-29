import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import mealsImage from "../../assets/meals.jpg";
import bakery from "../../assets/littlecakes.jpg";

import classes from "./Header.module.css";
import violetLogo from "../../assets/VioletsST.png";
// import violetLogo from "../../assets/logowhite.png";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img className={classes.logo} src={violetLogo}></img>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={bakery} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
