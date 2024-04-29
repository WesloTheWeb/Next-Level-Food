'use client';

import { useFormState } from 'react-dom';
import classes from './page.module.scss';
import MealForm from '@/components/Meals/MealForm';
import { shareMeal } from '../../../../lib/actions';

export default function ShareMealPage() {
  const [state, formAction] = useFormState<any, any>(shareMeal, { message: null });
// ? I used any for the generic types, but you should replace those with the correct types if they are available or
// ?  if you can define them yourself.


  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
        {state.message && <p className={classes.error}>{state.message}</p>}
      </header>
      <main className={classes.main}>
        <MealForm formAction={formAction} />
      </main>
    </>
  );
};
