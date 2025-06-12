import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Menu/Menu'
import styles from '../page.module.css'

export const metadata = {
  title: "Dépigeonnage Pyrénées-Orientales - Radikal 3D",
  description: "Protégez votre bâtiment des nuisances des pigeons avec Radikal 3D. Intervention professionnelle et respectueuse dans les Pyrénées-Orientales."
}

const depigeonnageContent = {
  title: "Dépigeonnage et lutte contre les nuisances des pigeons",
  intro: "Radikal 3D propose des solutions professionnelles de dépigeonnage à Perpignan pour protéger vos bâtiments et réduire les risques sanitaires liés aux pigeons.",
  sections: [
    {
      title: "1. Diagnostic des zones à dépigeonner",
      content: "Nous identifions les zones d’accumulation de pigeons, les risques de dégradation et de salissures afin de définir une stratégie adaptée.",
    },
    {
      title: "2. Mise en place de dispositifs anti-pigeons",
      content: "Installation de dispositifs mécaniques (pics, filets, barrières), répulsifs sonores ou visuels pour éloigner les pigeons sans leur nuire.",
    },
    {
      title: "3. Nettoyage et désinfection",
      list: [
        "Nettoyage complet des surfaces souillées par les déjections.",
        "Désinfection pour limiter les risques sanitaires liés aux bactéries et champignons.",
        "Traitement des zones accessibles pour éviter le retour des pigeons."
      ],
      content: "Nos interventions garantissent un environnement propre, sain et protégé.",
    },
    {
      title: "4. Suivi et entretien",
      content: "Nous proposons des contrats de suivi pour maintenir l’efficacité des dispositifs anti-pigeons sur le long terme.",
    },
    {
      title: "5. Intervention sur Perpignan et communes proches",
      content: "Service professionnel disponible rapidement sur Perpignan, Canet-en-Roussillon, Elne et leurs environs.",
    }
  ],
  conclusion: "Radikal 3D, votre expert en dépigeonnage dans les Pyrénées-Orientales, vous aide à protéger votre patrimoine immobilier des nuisances des pigeons."
}

export default function page() {
  return (
   <main className={styles.main}> 
      <Banner />
      <Menu {...depigeonnageContent}/>
    </main>
  )
}