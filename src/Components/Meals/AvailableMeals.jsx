// import classes from "./AvailableMeals.module.css";
import { v4 as uuidv4 } from "uuid";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const dummy_meals = [
  {
    id: uuidv4(),
    name: "Sushi",
    desc: "Finest fish and veggies",
    price: 22.99,
  },

  {
    id: uuidv4(),
    name: "Schnitzel",
    desc: "A german specialty",
    price: 16.5,
  },

  {
    id: uuidv4(),
    name: "Barbecue Burger",
    desc: "America, raw, meaty",
    price: 15,
  },

  {
    id: uuidv4(),
    name: "Green Bowl",
    desc: "Healthy...and green...",
    price: 18.75,
  },
];

const AvailableMeals = () => {
  return (
    <section>
      <Card>
        <ul>
          {dummy_meals.map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              desc={meal.desc}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
