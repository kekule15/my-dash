import React from 'react'

import styles from '../pagination/pagination.module.css'

const PaginationWidget = () => {
    return (
        <div className={styles.container}>
            <button className={styles.button} disabled>Previous</button>
            <button className={styles.button}>Next</button>
        </div>
    )
}

export default PaginationWidget