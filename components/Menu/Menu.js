import React from 'react'
import styles from './menu.module.css'

export default function Menu({ title, intro, sections, conclusion }) {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
          <p className={styles.p}>{intro}</p>
            {sections?.map((section, index) => (
              <div key={index}>
                <h2 className={styles.h2}>{section.title}</h2>
                {section.content && <p className={styles.p}>{section.content}</p>}
                {section.list && (
                  <ul className={styles.ul}>
                    {section.list.map((item, idx) => (
                      <li className={styles.li} key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
             </div>
            ))}
        {conclusion && <p className={styles.p2}>{conclusion}</p>}
      </div>
    </section>
  )
}