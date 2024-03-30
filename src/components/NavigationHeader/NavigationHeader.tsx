import React from "react";
import Link from "next/link";
import classes from './NavigationHeader.module.scss';

const {navLink} = classes;

const NavigationHeader = () => {

    const availablePages = [
        {
            page: "Home",
            path: "/"
        },
        {
            page: "Community",
            path: '/community'
        },
        {
            page: "Meals",
            path: '/meals'
        },
        {
            page: "Share Meal",
            path: '/meals/share'
        }
    ];

    return (
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

    );
};

export default NavigationHeader;