import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Menu/Menu'
import styles from '../page.module.css'

export const metadata = {
  title: "Désinsectisation à Perpignan - Traitement insectes nuisibles - Radikal 3D",
  description: "Radikal 3D vous débarrasse des insectes nuisibles à Perpignan et dans tout le 66. Intervention rapide, traitements efficaces et respectueux de l’environnement.",
}

const desinsectisationContent = {
  title: "Désinsectisation : traitement des insectes nuisibles",
  intro: "Radikal 3D intervient à Perpignan et dans les Pyrénées-Orientales pour éliminer tous types d’insectes nuisibles : cafards, fourmis, puces, punaises de lit, blattes, mouches, moustiques et autres parasites.",
  sections: [
    {
      title: "1. Diagnostic et identification de l’infestation",
      content: "Nos techniciens identifient précisément les espèces présentes, leur niveau de prolifération, et les zones critiques à traiter.",
    },
    {
      title: "2. Choix du traitement adapté",
      content: "Selon l’insecte ciblé, nous utilisons des traitements insecticides professionnels : gels, poudres, nébulisation ou pulvérisation, adaptés à votre environnement (logement, restaurant, local professionnel...).",
    },
    {
      title: "3. Intervention et sécurité",
      list: [
        "Mise en sécurité des personnes, animaux et denrées alimentaires.",
        "Traitement discret et rapide.",
        "Utilisation de produits efficaces et agréés.",
        "Respect strict des normes sanitaires et environnementales."
      ],
      content: "L’intervention est planifiée pour perturber le moins possible votre quotidien tout en assurant une efficacité maximale.",
    },
    {
      title: "4. Suivi post-traitement et conseils",
      content: "Nous assurons un suivi si nécessaire et vous apportons des conseils pratiques pour éviter une nouvelle infestation (nettoyage, colmatage, gestion des déchets...).",
    },
    {
      title: "5. Zones d’intervention",
      content: "Nous intervenons à Perpignan, Canet-en-Roussillon, Le Soler, Saint-Laurent-de-la-Salanque, et partout dans les Pyrénées-Orientales.",
    }
  ],
  conclusion: "Pour une désinsectisation rapide et efficace dans le 66, faites appel à Radikal 3D. Nos traitements vous garantissent un environnement sain et protégé durablement."
}

export default function page() {
  return (
    <main className={styles.main}>
      <Banner />
      <Menu {...desinsectisationContent} backgroundImage="/desinsectisation.png"/>
    </main>
  )
}
