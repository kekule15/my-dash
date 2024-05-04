import React from 'react'
import CardWidget from '../ui/dashboard/card/card'

import styles from '../dashboard/dashboard.module.css'
import RightBarWidget from '../ui/dashboard/rightbar/rightbar'
import TransactionWidget from '../ui/dashboard/transactions/transactions'
import ChartWidget from '../ui/dashboard/chart/chart'

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <CardWidget />
          <CardWidget />
          <CardWidget />
        </div>
        <div className={styles.transactions}>
          <TransactionWidget/>
        </div>
        <div className={styles.chart}>
          <ChartWidget/>
        </div>
      </div>
      <div className={styles.side}>
        <RightBarWidget/>
      </div>



    </div>
  )
}

export default DashboardPage