import React from 'react'

import Image from 'next/image'

import styles from '@/app/ui/dashboard/users/singleuser/singleuser.module.css'

const SingleUserPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src="/avatar.png" alt='User Image' fill />

                </div>
                John Doe

            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label >Username</label>
                    <input type="text" name='Username' placeholder="John Doe" />

                    <label >Email</label>
                    <input type="email" name='email' placeholder="JohnDoe@gmail.com" />
                    <label >Password</label>
                    <input type="password" name='password' placeholder="************" />

                    <label >Phone</label>
                    <input type="text" name='phone' placeholder="+234 9014700476" />

                    <label >Address</label>
                    <textarea name='address' placeholder="Lagos Nigeria" />
                    <div className={styles.selections}>
                        <div className={styles.oneSelection} >
                            <label >Is Admin</label>
                            <select name="isAdmin" id="isAdmin">
                                <option value="true">yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                        <div className={styles.oneSelection}>
                            <label >Is Active</label>
                            <select name="isActive" id="isActive">
                                <option value="true">yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                    </div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage