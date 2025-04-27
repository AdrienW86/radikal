import React from 'react'
import styles from './about.module.css'

export default function About() {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}> L'entreprise </h1>
            <p className={styles.p}>
                Chez Radikal 3D, nous sommes passionnés par la protection de vos biens contre les termites. Implantés dans les Pyrénées-Orientales (66), 
                nous sommes les spécialistes locaux pour vous aider à lutter contre cette menace invisible qui ronge lentement vos fondations et structures en bois. 
                Grâce à notre expertise, nous vous offrons des solutions de traitement sur-mesure pour éradiquer les termites et préserver la sécurité de votre habitat.
            </p>
        <h2 className={styles.h2}> Une expertise de proximité, dédiée à votre tranquillité </h2>
            <p className={styles.p}>
                À Radikal 3D, nous croyons que chaque intervention doit être unique, en fonction de l'ampleur de l'infestation et des spécificités de votre bâtiment. 
                Nous intervenons rapidement sur tout le département, de Perpignan à Céret, en passant par Argelès-sur-Mer et leurs environs. Nous offrons des solutions fiables 
                pour stopper la propagation des termites, qu'il s'agisse de maisons privées ou de bâtiments commerciaux.
            </p>
        <h2 className={styles.h2}> Des traitements certifiés pour une action ciblée </h2>
            <p className={styles.p}>
                Nos techniciens sont certifiés et formés aux meilleures pratiques en matière d'extermination des termites. Nous utilisons des produits efficaces et respectueux de l'environnement, 
                garantissant non seulement l'éradication des nuisibles, mais aussi la sécurité de vos proches et de vos animaux. Chaque traitement est adapté à vos besoins spécifiques, 
                pour une action durable et sans risque.
            </p>
        <h2 className={styles.h2}> Une prise en charge complète, de l'évaluation à la prévention </h2>
        <p className={styles.p}>
            Chez Radikal 3D, nous allons au-delà de l’intervention. Nous réalisons un diagnostic complet de votre propriété pour identifier la source de l'infestation, 
            et nous proposons des solutions adaptées à chaque situation. Après l'extermination, nous vous offrons des conseils pour prévenir toute récidive et protéger votre bien à long terme.
        </p>
        <p className={styles.p}>
            Faites confiance à Radikal 3D pour protéger votre maison des termites et des dommages qu'ils provoquent. Nous sommes là pour vous offrir une tranquillité d'esprit 
            et un environnement sans risques, avec des solutions sur mesure adaptées à chaque besoin.
        </p>
    </section>
  )
}