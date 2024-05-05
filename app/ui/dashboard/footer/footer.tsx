import React from 'react'
import styles from '../footer/footer.module.css'
const FooterWidget = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.logo}>
                kekule DEV
            </h2>

            <h2 className={styles.text}>
                © All rights reserved
            </h2>

        </div>
    )
}

export default FooterWidget