import sql from 'better-sqlite3';

// Define the structure of a meal object as you expect to receive from the database.
interface Meal {
    id: number;
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
};

const db = sql('meals.db');

// Ensure that getMeals returns a Promise of Meal[].
export async function getMeals(): Promise<Meal[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // ? When you fetch the meals from the database, TypeScript should now understand the structure.
    return db.prepare('SELECT * FROM meals').all() as Meal[];
};
