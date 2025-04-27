import React from 'react'
import styles from './menu.module.css'

export default function Menu() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Traitement des termites</h1>
        <p className={styles.p}>
          Chez Radikal 3D, nous intervenons rapidement pour éliminer toute infestation de termites. 
          Grâce à notre expertise, nous vous garantissons une solution efficace et durable pour protéger vos biens.
        </p>

        <h2 className={styles.h2}>1. Diagnostic et identification des termites</h2>
        <p className={styles.p}>
          Nous procédons à une inspection complète de votre domicile ou de vos locaux pour identifier précisément la présence de termites et évaluer l'ampleur de l'infestation. 
          Après analyse, un devis détaillé et adapté à votre situation vous est proposé.
        </p>    

        <h2 className={styles.h2}>2. Préparation de l'intervention</h2>
        <p className={styles.p}>
          Avant l'intervention, nous préparons soigneusement les lieux en protégeant vos biens et en choisissant les méthodes d'extermination les plus adaptées pour traiter efficacement l'infestation de termites : traitement chimique, biologique ou mécanique.
        </p> 

        <h2 className={styles.h2}>3. Traitement anti-termites</h2>
        <ul className={styles.ul}>
          <li className={styles.li}>Éradication complète des termites dans les structures en bois, les fondations et autres zones touchées.</li>
          <li className={styles.li}>Utilisation de produits professionnels certifiés et respectueux de l'environnement.</li>
          <li className={styles.li}>Application ciblée de traitements liquides ou sous forme de pièges à termites.</li>
          <li className={styles.li}>Traitement curatif et préventif pour assurer une protection à long terme.</li>
        </ul>
        <p className={styles.p}>
          Nos interventions sont réalisées de manière précise et rigoureuse afin de garantir l'élimination totale des termites et protéger vos structures.
        </p>

        <h2 className={styles.h2}>4. Prévention et recommandations</h2>
        <p className={styles.p}>
          Après le traitement, nous vous fournissons des conseils pour éviter toute nouvelle infestation de termites, tels que la gestion de l'humidité, l'entretien régulier des structures en bois et le colmatage des accès.
        </p>

        <h2 className={styles.h2}>5. Contrôle et suivi post-intervention</h2>
        <p className={styles.p}>
          Nous réalisons un contrôle final pour vérifier l'efficacité du traitement et vous proposons des services de suivi périodiques pour garantir l'absence de nouvelles infestations.
        </p>
        <p className={styles.p2}>
          Avec Radikal 3D, protégez vos bâtiments et vos biens contre les termites grâce à l'expertise d'une équipe professionnelle, réactive et toujours à votre service.
        </p>
      </div>
    </section>
  )
}