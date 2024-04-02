import Link from 'next/link';
import Image from 'next/image';
import classes from './mealItem.module.scss';

const { meal, foodImage, headerText, content, actions } = classes;

// ? Define the props interface
interface MealItemProps {
    title: string;
    slug: string;
    image: string;
    summary: string;
    creator: string;
};

export default function MealItem({ title, slug, image, summary, creator }: MealItemProps) {
    return (
        <article className={meal}>
            <header>
                <div className={foodImage}>
                    <Image src={image} alt={title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                </div>
                <div className={headerText}>
                    <h2>{title}</h2>
                    <p>by {creator}</p>
                </div>
            </header>
            <div className={content}>
                <p>{summary}</p>
                <div className={actions}>
                    <Link href={`/meals/${slug}`}>
                        View Details
                    </Link>
                </div>
            </div>
        </article>
    );
};
