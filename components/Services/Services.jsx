import React from 'react'
import styles from './services.module.css'
import Card from '../Card/Card'

const data = [
  {
    image: "/desinfection.png",
    title: "Désinfection",
    alt: "Technicien en intervention contre les nuisibles dans les Pyrénées-Orientales",
    url: "/desinfection#title"
  },
  {
    image: "/desinsectisation.png",
    title: "Désinsectisation",
    alt: "Traitement contre les insectes nuisibles dans les Pyrénées-Orientales",
    url: "/desinsectisation#title"
  },
  {
    image: "/deratisation.png",
    title: "Dératisation",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/rats#title"
  },
   {
    image: "/pigeons.png",
    title: "Dépigeonnage",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/pigeons#title"
  },
  {
    image: "/frelons.jpg",
    title: "Guêpes et frelons",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/frelons#title"
  },
   {
    image: "/cafards.jpg",
    title: "Blattes et cafard",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/cafards#title"
  },
   {
    image: "/punaises.png",
    title: "Punaises et puces de lits",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/puces#title"
  },
    {
    image: "/termites.jpg",
    title: "Termites",
    alt: "Intervention contre les rongeurs dans les Pyrénées-Orientales",
    url: "/termites#title"
  },
]

export default function Services() {
  return (
    <section className={styles.services}>
      <h2 id="services" className={styles.title}> Nos services</h2>
      {data.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          title={item.title}
          alt={item.alt}
          url={item.url}
        />
      ))}
    </section>
  )
}


