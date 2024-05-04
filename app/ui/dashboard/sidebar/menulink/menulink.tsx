'use client'
import React from 'react'
import styles from '../menulink/menulink.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

interface MenuItem {
    path: string;
    icon: React.ReactNode;
    title: string;
}

const MenuLink: React.FC<{ item: MenuItem }> = ({ item }) => {
    const patheName = usePathname()
    return (
        <Link href={item.path} className={`${styles.container} ${patheName === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink