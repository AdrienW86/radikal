import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Menu/Menu'
import styles from '../page.module.css'

export const metadata = {
  title: "Désinsectisation à Perpignan - Radikal 3D",
  description: "Traitement contre cafards, fourmis, moustiques et autres insectes à Perpignan. Radikal 3D vous débarrasse efficacement des nuisibles.",
}

const cafardsContent = {
  title: "Élimination des cafards et blattes",
  intro: "Radikal 3D propose un service efficace de désinsectisation pour éradiquer cafards, blattes et autres insectes rampants à Perpignan. Protégez votre maison ou votre commerce rapidement avec nos solutions professionnelles.",
  sections: [
    {
      title: "1. Diagnostic d’infestation de cafards",
      content: "Nous identifions précisément les zones infestées et le type de cafards présents afin d’adapter le traitement à la situation spécifique de votre habitat ou local professionnel.",
    },
    {
      title: "2. Préparation et sécurisation",
      content: "Nous sécurisons les lieux, protégeons les aliments et informons sur les consignes à respecter pour une intervention sans risque et optimale.",
    },
    {
      title: "3. Traitement anti-cafards efficace",
      list: [
        "Application de gels insecticides longue durée.",
        "Traitement des zones cachées (fissures, plinthes, canalisations).",
        "Utilisation de produits professionnels homologués et respectueux de l’environnement.",
        "Techniques ciblées pour limiter la propagation et éviter la réinfestation."
      ],
      content: "Nos interventions garantissent une élimination rapide et durable des cafards et blattes, souvent vecteurs de maladies.",
    },
    {
      title: "4. Conseils de prévention",
      content: "Nous vous accompagnons pour mettre en place des mesures d’hygiène et de stockage alimentaire afin d’éviter toute nouvelle infestation.",
    },
    {
      title: "5. Intervention sur Perpignan et alentours",
      content: "Disponible rapidement, notre équipe intervient sur Perpignan, Bompas, Cabestany et les communes proches pour une désinsectisation professionnelle.",
    }
  ],
  conclusion: "Pour une maison saine et sans cafards, faites confiance à Radikal 3D, votre expert local en désinsectisation à Perpignan."
}


export default function page() {
  return (
   <main className={styles.main}> 
      <Banner />
      <Menu {...cafardsContent} backgroundImage="/cafards.jpg" />
    </main>
  )
}

