import Link from 'next/link';
import Image from 'next/image';
import classes from './mealItem.module.scss';

const { meal, image, headerText, content, actions } = classes;

// Define the props interface
interface MealItemProps {
    title: string;
    slug: string;
    mealImage: string; // Assuming mealImage is a URL string. Adjust if it's more complex.
    summary: string;
    creator: string;
}
// TODO: These props will come from database and what user will submit
// Apply the interface to your component props
export default function MealItem({ title, slug, mealImage, summary, creator }: MealItemProps) {
    return (
        <article className={meal}>
            <header>
                <div className={image}>
                    {/* Ensure your Image component is correctly configured to handle 'fill' */}
                    <Image src={mealImage} alt={title} layout="fill" />
                </div>
                <div className={headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={content}>
                <p>{summary}</p>
                <div className={actions}>
                    <Link href={`/meals/${slug}`} passHref>
                        <a>View Details</a>
                    </Link>
                </div>
            </div>
        </article>
    );
}
