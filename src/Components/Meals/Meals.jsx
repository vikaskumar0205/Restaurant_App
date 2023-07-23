import { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals=()=> {
  return <Fragment>
    <section>
      <MealsSummary/>
      <AvailableMeals/>
    </section>
  </Fragment>
}

export default Meals;