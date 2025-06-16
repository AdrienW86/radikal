import Banner from '@/components/Banner/Banner'
import About from '@/components/About/About'

export const metadata = {
  title: "L'entreprise - Radikal 3D",
  description: "Votre expert contre la lutte des nuisibles."
}

export default function page() {
  return (
    <main>
      <Banner />
      <About />     
    </main>
  )
}