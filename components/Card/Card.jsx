import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './card.module.css'

export default function Card({ image, alt, title, url }) {
  return (
    <Link href={url} className={styles.cardLink}>
      <section className={styles.localisation}>
        <Image
          src={image}
          alt={alt}
          width={250}
          height={250}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
        <div className={styles.intro}>
          <h3 className={styles.h3}>{title}</h3>
        </div>
      </section>
    </Link>
  )
}
