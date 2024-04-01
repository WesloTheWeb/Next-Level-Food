import React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImg from '@/assets/logo.png';
import classes from './NavigationHeader.module.scss';
import NavLink from "../NavLink/NavLink";

const { siteHeader, siteLogoText } = classes;

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
    ];

    return (
        <section className={siteHeader}>
            <Link className={siteLogoText} href='/'>
                <Image
                    priority
                    width={75}
                    height={75}
                    src={logoImg}
                    alt="A plate with food on it" />
                <h1>NextLevel Foods</h1>
            </Link>
            <nav>
                {availablePages.map((page, index) => (
                    <NavLink
                        key={index}
                        href={page.path}
                        pageName={page.page}
                    />
                ))}
            </nav>
        </section>
    );
};

export default NavigationHeader;
