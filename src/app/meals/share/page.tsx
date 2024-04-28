// 'use client';

import classes from './page.module.scss';
import MealForm from '@/components/Meals/MealForm';

export default function ShareMealPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <MealForm />
      </main>
    </>
  );
};
