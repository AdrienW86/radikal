import Gallery from '@/components/Gallery/Gallery'
import styles from '../page.module.css'

export const metadata = {
  title: "Nos interventions - Radikal 3D",
  description: "Votre expert contre la lutte des nuisibles."
}

export default function Pictures() {
  return (
    <main className={styles.main}>
     <h2 className={styles.h2}>  Galerie de photos </h2>
      <Gallery /> 
    </main>
  )
}