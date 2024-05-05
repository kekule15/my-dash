'use client'

import React from 'react'

import Image from 'next/image'

import styles from '@/app/ui/dashboard/users/users.module.css'
import SearchWidget from '@/app/ui/dashboard/search/search'
import Link from 'next/link'
import PaginationWidget from '@/app/ui/dashboard/pagination/pagination'


const UsersPage = async () => {



  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchWidget placeholder='Search Users' />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/avatar.png" alt="User Image" width={40} height={40} className={styles.userImage} />
                John Doe
              </div>
            </td>
            <td>John@gmail.com</td>
            <td>02.05.2024</td>
            <td>Admin</td>
            <td>Active</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/users/test">
                  <button className={`${styles.button} ${styles.view} `}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete} `}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <PaginationWidget />
    </div>
  )
}

export default UsersPage