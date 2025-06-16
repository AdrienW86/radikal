import Map from '@/components/Map/Map'
import Form from '@/components/Form/Form'
import styles from '../page.module.css'

export const metadata = {
  title: "Nous contacter - Radikal 3D",
  description: "Votre expert contre la lutte des nuisibles."
}

export default function Contact() {
  return (
    <main className={styles.container}>
     <h1 className={styles.h2}> Nous contacter </h1>    
      <Map />
      <Form />
    </main>
  )
}