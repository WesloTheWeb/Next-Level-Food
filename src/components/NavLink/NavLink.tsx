'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './NavLink.module.scss';

const { active, navLink } = styles;

interface NavLinkProps {
    href: string,
    pageName: string
}

const NavLink = ({ href, pageName }: NavLinkProps) => {
    const path = usePathname();
    const isActive = path === href;

    return (
        <Link href={href} className={`${navLink} ${isActive ? active : ''}`} passHref>
            {pageName}
        </Link>
    );
};

export default NavLink;
