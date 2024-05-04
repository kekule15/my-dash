import React from 'react'

import styles from '../search/search.module.css'
import { MdSearch } from 'react-icons/md'

interface PlaceHolder {
    placeholder: string;
  }

const SearchWidget : React.FC<PlaceHolder> = ({ placeholder }) => {
  return (
    <div className={styles.container}>
        <MdSearch/>
        <input type="text" placeholder= {placeholder}  className={styles.input} />
    </div>
  )
}

export default SearchWidget