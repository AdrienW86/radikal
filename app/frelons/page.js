import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Menu/Menu'
import styles from '../page.module.css'

export const metadata = {
  title: "Destruction de nids de guêpes et frelons à Perpignan - Radikal 3D",
  description: "Radikal 3D intervient rapidement pour éliminer les nids de guêpes et frelons à Perpignan. Sécurité et efficacité garanties.",
}

const guepesContent = {
  title: "Destruction de nids de guêpes et frelons",
  intro: "Radikal 3D intervient rapidement à Perpignan pour éliminer les nids de guêpes, frelons et frelons asiatiques, garantissant votre sécurité et celle de votre famille ou vos collaborateurs.",
  sections: [
    {
      title: "1. Localisation et évaluation du nid",
      content: "Nos techniciens identifient avec précision la localisation du nid et évaluent le risque pour adapter l’intervention.",
    },
    {
      title: "2. Préparation de l’intervention",
      content: "Nous mettons en place des mesures de sécurité pour protéger les personnes et animaux à proximité avant de procéder à la destruction du nid.",
    },
    {
      title: "3. Éradication des nids de guêpes et frelons",
      list: [
        "Utilisation d’équipements de protection adaptés.",
        "Traitement chimique ciblé ou aspiration des insectes selon la situation.",
        "Élimination complète du nid pour éviter toute réinfestation.",
        "Respect des normes environnementales et sanitaires."
      ],
      content: "L’intervention est réalisée rapidement pour limiter les risques de piqûres et protéger votre environnement.",
    },
    {
      title: "4. Prévention et conseils",
      content: "Nous vous conseillons sur les moyens de réduire l’attractivité de votre propriété pour ces insectes et les gestes à adopter.",
    },
    {
      title: "5. Intervention rapide dans les Pyrénées-Orientales",
      content: "Disponible sur Perpignan, Saint-Cyprien, Argelès-sur-Mer et alentours pour une intervention rapide et efficace.",
    }
  ],
  conclusion: "Pour sécuriser votre maison ou votre entreprise, faites appel à Radikal 3D, spécialiste de la destruction de nids de guêpes et frelons dans le 66."
}


export default function page() {
  return (
   <main className={styles.main}> 
      <Banner />
      <Menu {...guepesContent} />
    </main>
  )
}