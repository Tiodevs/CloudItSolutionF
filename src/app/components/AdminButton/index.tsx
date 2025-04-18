'use client'

import Link from 'next/link'
import styles from './styles.module.scss'

export function AdminButton() {
  return (
    <div className={styles.adminButtonContainer}>
      <Link href="/login" className={styles.adminButton}>
        Área Administrativa
      </Link>
    </div>
  )
} 