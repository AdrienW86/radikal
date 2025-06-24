import Banner from '@/components/Banner/Banner'
import Menu from '@/components/Menu/Menu'
import styles from '../page.module.css'

export const metadata = {
  title: "Désinfection à Perpignan - Traitement virus, bactéries et champignons - Radikal 3D",
  description: "Radikal 3D réalise des opérations de désinfection à Perpignan et dans le 66 : locaux, habitations, bureaux, après sinistre ou contamination. Intervention rapide et efficace.",
}

const desinfectionContent = {
  title: "Désinfection de locaux et habitations",
  intro: "Radikal 3D intervient rapidement pour désinfecter tous types de locaux à Perpignan et dans les Pyrénées-Orientales : habitations, bureaux, commerces, parties communes, véhicules, etc.",
  sections: [
    {
      title: "1. Analyse du lieu et des risques",
      content: "Avant toute intervention, nous réalisons une évaluation du lieu à désinfecter, du niveau de contamination (virus, bactéries, champignons...), et du type de surface à traiter.",
    },
    {
      title: "2. Choix de la méthode de désinfection",
      content: "Selon la situation, nous utilisons les techniques les plus appropriées : pulvérisation, nébulisation, brumisation ou essuyage manuel avec des désinfectants homologués.",
    },
    {
      title: "3. Intervention rapide et sécurisée",
      list: [
        "Équipements de protection pour nos techniciens.",
        "Traitements efficaces contre virus (COVID-19, grippe...), bactéries et champignons.",
        "Produits certifiés conformes aux normes sanitaires.",
        "Respect des délais de réintégration après désinfection."
      ],
      content: "Nous garantissons une désinfection complète et sécurisée, en conformité avec les normes en vigueur.",
    },
    {
      title: "4. Désinfection après sinistre ou décès",
      content: "Nous intervenons également après un dégât des eaux, un incendie, un décès ou pour une désinfection post-COVID ou autres contaminations virales.",
    },
    {
      title: "5. Intervention dans tout le 66",
      content: "Radikal 3D couvre Perpignan, Thuir, Elne, Bompas, Saint-Estève et les communes voisines pour des désinfections urgentes ou programmées.",
    }
  ],
  conclusion: "Pour assurer la sécurité sanitaire de vos espaces privés ou professionnels, faites appel à Radikal 3D, spécialiste de la désinfection dans les Pyrénées-Orientales."
}

export default function page() {
  return (
    <main className={styles.main}>
      <Banner />
      <Menu {...desinfectionContent} backgroundImage="/desinfection.png" />
    </main>
  )
}
