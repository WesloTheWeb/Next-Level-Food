import React from 'react';
import classes from './page.module.scss';
import Link from 'next/link';
import MealsGrid from '@/components/Meals/MealGrid';

const { cta, header, main, highlight } = classes;

export default function AboutPage() {

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
                <MealsGrid meals={[]} />
            </main>
        </>
    );
};