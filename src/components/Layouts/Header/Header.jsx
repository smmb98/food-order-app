import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../../assets/meals.jpg";

const Header = (props) => (
  <Fragment>
    <header className={classes.header}>ReactMeals</header>
    <button>Cart</button>
    <div className={classes["main-image"]}>
      <img src={mealsImage} alt="A table full of delicious food!" />
    </div>
  </Fragment>
);

export default Header;
