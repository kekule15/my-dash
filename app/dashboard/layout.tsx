import React from 'react'
import SideBar from '../ui/dashboard/sidebar/sidebar'
import NavBar from '../ui/dashboard/navbar/navbar'

import styles from '../dashboard/dashboard.module.css'
import DashboardPage from './page'
import FooterWidget from '../ui/dashboard/footer/footer'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <NavBar />
        {/* <DashboardPage /> */}
        {children}
        <FooterWidget />
      </div>
    </div>
  )
}

