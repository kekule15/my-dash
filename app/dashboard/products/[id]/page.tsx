import React from 'react'

import Image from 'next/image'

import styles from '@/app/ui/dashboard/users/singleuser/singleuser.module.css'

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/avatar.png" alt='User Image' fill />

                </div>
                Iphone

            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label >Title</label>
                    <input type="text" name='title' placeholder="John Doe" />

                    <label >Price</label>
                    <input type="text" name='price' placeholder="$999" />
                    <label >Stock</label>
                    <input type="text" name='stock' placeholder="23" />

                    <label >Color</label>
                    <input type="text" name='color' placeholder="red" />

                    <label >Size</label>
                    <input type="text" name='size' placeholder="196" />
                    <div className={styles.selections}>
                        <div className={styles.oneSelection} >
                            <label >Category</label>
                            <select name="cat" id="cat">
                                <option value="Kitchen">Kitchen</option>
                                <option value="Computer">Computer</option>
                            </select>
                        </div>

                    </div>
                    <label >Description</label>
                    <textarea name="desc" id="desc" rows={10}>Description</textarea>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage