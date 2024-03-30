import React from "react";
import Link from "next/link";

const NavigationHeader = () => {

    const availablePages = [
        {
            page: "community",
            path: '/community'
        },
        {
            page: "meals",
            path: '/meals'
        }
    ];

    return (
        <>
            {availablePages.map((page) => {
                return (
                    <Link href={page.path} key={page.path}>{page.page}</Link>
                )
            })}
        </>

    );
};

export default NavigationHeader