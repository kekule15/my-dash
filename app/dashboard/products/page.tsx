import React from 'react'

import Image from 'next/image'

import styles from '@/app/ui/dashboard/products/products.module.css'
import Link from 'next/link'
import SearchWidget from '@/app/ui/dashboard/search/search'
import PaginationWidget from '@/app/ui/dashboard/pagination/pagination'

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <SearchWidget placeholder='Search Products' />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/product.jpg" alt="Product Image" width={40} height={40} className={styles.productImage} />
                Iphone
              </div>
            </td>
            <td>Best Phone Ever</td>
            <td>$999</td>
            <td>02.05.2024</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
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

export default ProductsPage