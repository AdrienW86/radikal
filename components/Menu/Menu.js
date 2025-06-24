import React from 'react'
import styles from './menu.module.css'

export default function Menu({ title, intro, sections, conclusion, backgroundImage }) {
  return (
    <section
      className={styles.container}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
      }}
    >
      <div className={styles.content}>
        <h1 id="title" className={styles.title}>{title}</h1>
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
