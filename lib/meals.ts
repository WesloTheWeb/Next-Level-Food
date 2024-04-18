import fs from 'node:fs';
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

// Define the structure of a meal object as you expect to receive from the database.
interface Meal {
    id: number;
    title: string;
    slug: string;
    image: string;
    summary: string;
    instructions: string;
    creator: string;
};

const db = sql('meals.db');

// Ensure that getMeals returns a Promise of Meal[].
export async function getMeals(): Promise<Meal[]> {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // To throw an error to show error page:
    // throw new Error('Loading meals failed.');

    // ? When you fetch the meals from the database, TypeScript should now understand the structure.
    return db.prepare('SELECT * FROM meals').all() as Meal[];
};

export function getMeal(slug: string): Meal {
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
};

export async function saveMeal(meal: Meal) {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop();
    console.log('extension', extension);
    const fileName = `${meal.slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error('Saving image failed!');
        };
    });

    // ? We want to store just the path to the image, not the image itself, in the database.
    meal.image = `/images/${fileName}`;

    // ? Saving it to the database:
    db.prepare(`
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
            @title,
            @summary,
            @instructions,
            @creator,
            @creator_email
            @image,
            @slug
        )
    `).run(meal);
};