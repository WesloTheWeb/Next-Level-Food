import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from './NavigationHeader.module.scss';

const { navLink, siteHeader, siteLogoText } = classes;

const NavigationHeader = () => {

    const availablePages = [
        {
            page: "Home",
            path: "/"
        },
        {
            page: "Foodies Community",
            path: '/community'
        },
        {
            page: "Browse Meals",
            path: '/meals'
        },
        // {
        //     page: "Share Meal",
        //     path: '/meals/share'
        // }
    ];

    return (
        <section className={siteHeader}>
            <Link href='/'>
                <div className={siteLogoText}>
                    <Image 
                        priority
                        width={75}
                        height={75}
                        src={logoImg} 
                        alt="A plate with food on it" />
                    <h1>NextLevel Foods</h1>
                </div>
            </Link>

            <nav>
                {availablePages.map((page) => {
                    return (
                        <Link
                            className={navLink}
                            href={page.path}
                            key={page.path}>
                            {page.page}
                        </Link>
                    )
                })}
            </nav>
        </section>
    );
};

export default NavigationHeader;