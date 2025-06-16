import React from 'react'
import styles from "./equipment.module.css"

export default function Equipment() {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}> Votre expert contre les nuisibles </h1>
      <div className={styles.column}>
        Située au cœur des Pyrénées-Orientales, Radikal 3D vous offre son expertise 
        spécialisée dans l’extermination des nuisibles. Que ce soit pour un traitement 
        curatif ou préventif, notre équipe intervient rapidement, discrètement et avec 
        des solutions certifiées. Faites confiance à des spécialistes engagés, à l’écoute 
        de vos besoins, pour protéger votre habitat et vos locaux contre les nuisibles. 
        Devis gratuit et intervention rapide partout dans les Pyrénées-Orientales.
      </div>
    </section>
  )
}
