import React from "react";
import Image from "next/image";
import classes from './page.module.scss';
import { getMeal } from "../../../../lib/meals";

const { header, image, headerText, creator, MealSummary, instructions } = classes;

interface Params {
    mealSlug: string;
};

export default function MealDetailsPage({ params }: { params: Params }) {
    const meal = getMeal(params.mealSlug);

    meal.instructions = meal.instructions.replace(/\n/g, '<br />');

    return (
        <>
            <header className={header}>
                <div className={image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
            </header>
            <h1 className={headerText}>{meal.title} Details</h1>
            <p className={creator}>
                by <a href={`mailto:${'EMAIL'}`}>{meal.name}</a>
            </p>
            <p className={MealSummary}>
                {meal.summary}
            </p>
            <main>
                <p className={instructions} dangerouslySetInnerHTML={{
                    __html: meal.instructions
                }}>

                </p>
            </main>
        </>
    )
};