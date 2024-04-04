import React, { Suspense } from 'react';
import Link from 'next/link';
import MealsGrid from '@/components/Meals/MealGrid';
import { getMeals } from '../../../lib/meals';
import Loader from '@/components/Loader/Loader';
import classes from './page.module.scss';

const { cta, header, main, highlight } = classes;

async function Meals() {
    const meals = await getMeals();

    return <MealsGrid meals={meals} />
};

export default function MealsPage() {

    return (
        <>
            <header className={header}>
                <h1>Delicious meals, created
                    <span className={highlight}> by you</span>
                </h1>
                <p>
                    Choose your favorite recipe and cook it yourself. It is easy and fun!
                </p>
                <p className={cta}>
                    <Link href="/meals/share">
                        Share Your Favorite Recipe
                    </Link>
                </p>
            </header>
            <main className={main}>
                <Suspense fallback={<Loader />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
};
