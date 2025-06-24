import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Menu/Menu'
import styles from '../page.module.css'

export const metadata = {
  title: "Traitement Punaises de lits à Perpignan - Radikal 3D",
  description: "Éradiquez les punaises de lit avec Radikal 3D. Inspection minutieuse et traitements efficaces pour un sommeil paisible à Perpignan."
}

const punaisesContent = {
  title: "Traitement des punaises et puces de lit",
  intro: "Radikal 3D vous aide à éliminer les punaises et puces de lit à Perpignan grâce à des traitements ciblés, efficaces et discrets. Protégez votre sommeil et votre confort au quotidien.",
  sections: [
    {
      title: "1. Détection et identification",
      content: "Nous réalisons une inspection minutieuse de votre literie, meubles et textiles pour confirmer la présence de punaises ou puces de lit et estimer l’ampleur de l’infestation.",
    },
    {
      title: "2. Préparation des locaux",
      content: "Nous vous guidons dans la préparation des chambres et espaces concernés pour optimiser l’efficacité du traitement.",
    },
    {
      title: "3. Traitement anti-punaises et puces",
      list: [
        "Application de produits insecticides spécifiques à action rapide.",
        "Utilisation de la chaleur (thermolyse) pour éradiquer les œufs et insectes.",
        "Traitements répétés pour assurer la destruction complète des infestations.",
        "Méthodes respectueuses de la santé humaine et des animaux domestiques."
      ],
      content: "Nos solutions garantissent une élimination totale des nuisibles pour un environnement sain et sécurisé.",
    },
    {
      title: "4. Prévention et conseils",
      content: "Après traitement, nous fournissons des recommandations pour éviter le retour des punaises et puces de lit, notamment l’entretien régulier et la vigilance lors de voyages.",
    },
    {
      title: "5. Service rapide et discret à Perpignan",
      content: "Intervention rapide dans tout le département 66, avec un service confidentiel et respectueux de votre intimité.",
    }
  ],
  conclusion: "Confiez votre problème de punaises ou puces de lit à Radikal 3D, expert en lutte contre ces nuisibles à Perpignan."
}

export default function page() {
  return (
   <main className={styles.main}> 
      <Banner />
      <Menu {...punaisesContent} backgroundImage="/punaises.png"/>
    </main>
  )
}