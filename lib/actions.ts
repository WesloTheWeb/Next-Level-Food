'use server';

import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

type Meal = {
    title: string | null;
    summary: string | null;
    instructions: string | null;
    image: File | null;
    creator: string | null;
    creator_email: string | null;
    id?: number; // optional property
    slug?: string; // optional property
};

export async function shareMeal(_: any, formData: FormData) {
// Notice the first parameter is named `_` to indicate it's not used.

    const isInvalidText = (text: string) => {
        return !text || text.trim() === '';
    };

    const meal: Meal = {
        title: formData.get('title') as string,
        summary: formData.get('summary') as string,
        instructions: formData.get('instructions') as string,
        image: formData.get('image') as File | null,
        creator: formData.get('name') as string,
        creator_email: formData.get('email') as string
    };

    console.log('meal', meal);

    if (
        (meal.title && isInvalidText(meal.title)) ||
        (meal.summary && isInvalidText(meal.summary)) ||
        (meal.instructions && isInvalidText(meal.instructions)) ||
        (meal.creator && isInvalidText(meal.creator)) ||
        (meal.creator_email && isInvalidText(meal.creator_email)) ||
        // Check if creator_email is a string and includes an '@'
        (typeof meal.creator_email !== 'string' || !meal.creator_email.includes('@')) ||
        // Check if image is a File and has a size greater than 0
        (!(meal.image instanceof File) || meal.image.size === 0)
    ) {
        // throw new Error('Invalid input')
        { message: 'Invalid input.' }
    }

    await saveMeal(meal);
    console.log('saveMeal', saveMeal);
    redirect('/meals');
};
