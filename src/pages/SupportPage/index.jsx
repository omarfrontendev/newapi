import React from 'react'
import styles from './.module.scss'

export default function SupportPage() {
  return (
    <div className={styles.support__container}>
      <h1 className={styles.title}>Get in touch</h1>
      <p className=''>PO Box 413658</p>
      <p>East Wing, B1906, Latifa Towers</p>
      <p>World Trade 1, Sheik Zayed Road, Dubai, UAE</p>
      <p>Telephone: (04) 236 016080074252</p>
      <a className={styles.link} href="mailto:info@pick-a.email">info@pick-a.email</a>
    </div>
  )
}
