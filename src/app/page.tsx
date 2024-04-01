'use client';

import Link from 'next/link';
import classes from './page.module.scss';
import ImageSlideshow from '@/components/ImagesSlideShow/ImagesSlideShow';

const { header, slideshow, hero, cta, instructionalSectionBlurb } = classes;

export default function Home({ }) {
  return (
    <>
      <header className={header}>
        <div className={slideshow}>
          <ImageSlideshow />
        </div>
        <section>
          <div className={hero}>
            <h1>NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className={cta}>
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </section>
      </header>

      <main>
        <section className={instructionalSectionBlurb}>
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className={instructionalSectionBlurb}>
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}