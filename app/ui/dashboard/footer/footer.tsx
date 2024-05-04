import React from 'react'
import styles from '../footer/footer.module.css'
const FooterWidget = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.logo}>
                kekule DEV
            </h2>

            <h2 className={styles.text}>
                © All rights research DEV
            </h2>

        </div>
    )
}

export default FooterWidget