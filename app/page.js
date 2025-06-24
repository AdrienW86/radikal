import Banner from '@/components/Banner/Banner'
import Equipment from '@/components/Equipment/Equipment'
import Services from '@/components/Services/Services'
import Description from '@/components/Description/Description'
import styles from './page.module.css'

export const metadata = {
  title: "Radikal 3D - Expert en extermination de nuisibles à Perpignan",
  description: "Radikal 3D, spécialiste de l'extermination de termites, nids de guêpes/frelons, punaises de lit et autres nuisibles à Perpignan et dans les Pyrénées-Orientales.",
}

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner />
      <Equipment />
      <Services />
      <Description />    
    </main>
  )
}