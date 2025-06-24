"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import styles from './header.module.css'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.0 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.0 });

  return (
    <header className={styles.header}>
      <Link href="tel:0608008683" className={styles.callButton}>
        📞  Appeler maintenant
      </Link>

      <Link href="/">
        <motion.img
          ref={ref1}
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: inView1 ? 1 : 0,
            x: inView1 ? 0 : -100,
          }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className={styles.logo}
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>   
     
      <div className={styles.buttonBox}> 
        <button className={`${styles.hamburger} ${isMenuOpen ? styles.open : styles.close}`} onClick={handleMenuToggle} aria-label="hamburger button">
            <span className={styles.line}> </span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
        </button>
        </div>
        {isMenuOpen && 
      <section className={styles.menu}>
        <ul className={styles.ul}>
          <li> <Link className={styles.li} href="/" onClick={handleMenuToggle}> Accueil </Link></li>
          <li> <Link className={styles.li} href="/pictures" onClick={handleMenuToggle}> Photos </Link></li>          
          <li> <Link className={styles.li} href="/desinsectisation" onClick={handleMenuToggle}> Désinsectisation </Link></li>
          <li> <Link className={styles.li} href="/desinfection" onClick={handleMenuToggle}> Désinfection </Link></li>          
          <li> <Link className={styles.li} href="/rats" onClick={handleMenuToggle}> Dératisation </Link></li>
          <li> <Link className={styles.li} href="/pigeons" onClick={handleMenuToggle}> Dépigeonnage </Link></li>
          <li> <Link className={styles.li} href="/frelons" onClick={handleMenuToggle}> Guêpes et frelons </Link></li>
          <li> <Link className={styles.li} href="/cafards" onClick={handleMenuToggle}> Blattes et cafards </Link></li>
          <li> <Link className={styles.li} href="/puces" onClick={handleMenuToggle}> Punaises et puces de lits </Link></li>
          <li> <Link className={styles.li} href="/termites" onClick={handleMenuToggle}> Extermination des termites </Link></li>
          <li> <Link className={styles.li} href="/entreprise" onClick={handleMenuToggle}> L'entreprise </Link></li>
          <li> <Link className={styles.li} href="/contact" onClick={handleMenuToggle}> Contact </Link></li>
        </ul>
      </section>}
    </header>
  )
}
