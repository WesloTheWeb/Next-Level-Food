import React from 'react';
import classes from './MealGrid.module.scss';
import MealItem from './MealItem';

const { meals: mealsClass } = classes; // Renamed to avoid naming conflict

// Define a Meal interface that matches the structure of your meal objects
interface Meal {
  id?: string | number, // Adjust according to your actual data
  title: string,
  slug: string,
  image: string,
  summary: string,
  creator: string,
};

interface MealsGridProps {
  meals: Meal[];
};

const MealsGrid = ({ meals }: MealsGridProps) => {
  return (
    <ul className={mealsClass}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
