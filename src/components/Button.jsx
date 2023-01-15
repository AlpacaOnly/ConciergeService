import React from 'react'
import styles from '../styles/Button.css'

export const Button = (name) => {
  return (
    <button className={styles.Button}>{name}</button>
  )
}

export default Button;

