import styles from '@/app/legalPages.module.css';

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Protection Nuisibles',
}

export default function MentionsLegales() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Mentions légales</h1>
      
      <h2 className={styles.subtitle}>Éditeur du site</h2>
      <p className={styles.text}>
        Nom : HOSPICE MICHEL<br/>
        Forme juridique : Auto-entrepreneur<br/>
        Dénomination commerciale : Radikal 3D<br/>
        Adresse : 88 chemin des charettes, 66000 Perpignan, France<br/>
        Téléphone : +33 6 08 00 86 83<br/>
        Email : <a href="mailto:radikal.3d66@gmail.com" className={styles.link}>radikal.3d66@gmail.com</a><br/>
        Directeur de publication : HOSPICE MICHEL<br/>
        SIREN : 483160420<br/>
        SIRET : 483 160 420 00012<br/>
       
      </p>

      <h2 className={styles.subtitle}>Hébergeur</h2>
      <p className={styles.text}>
        Nom : Vercel Inc.<br/>
        Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br/>
        Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className={styles.link}>https://vercel.com</a>
      </p>

      <h2 className={styles.subtitle}>Conditions d'utilisation</h2>
      <p className={styles.text}>
        Le Radikal 3D est accessible à l'URL : https://www.radikal3d.fr/.<br/>
        Son utilisation est régie par les présentes conditions. En utilisant le site, vous acceptez ces conditions. Elles peuvent être modifiées à tout moment sans préavis.
      </p>

      <h2 className={styles.subtitle}>Limitation de responsabilité</h2>
      <p className={styles.text}>
        Les informations présentes sur ce site sont fournies de bonne foi, mais peuvent contenir des inexactitudes ou omissions. L'entreprise Radikal 3D ne saurait être tenue responsable de toute utilisation ou interprétation erronée.
      </p>

      <h2 className={styles.subtitle}>Litiges</h2>
      <p className={styles.text}>
        Les présentes conditions sont régies par la loi française et tout litige relève des tribunaux français. La langue de référence pour tout contentieux est le français.
      </p>
    </main>
  )
}
