import React, { useEffect, useState } from 'react';

import HeroImage from '../../public/assets/images/hero.jpg';
import Image from 'next/image';
import styles from './Hero.module.scss';

const Hero = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsSticky(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.hero__body}>
      <div className={styles.hero__container}>
        <div className={styles.hero}>
          <div
            className={`${
              isSticky ? styles.hero__content__fade : styles.hero__content
            }`}
          >
            <h1 className={styles.hero__title}>All Apple Orginals.</h1>
            <h1 className={styles.hero__title}>Only on Apple TV+.</h1>
            <button className={styles.hero__button}>Stream now</button>
            <div className={styles.hero__tv}>
              <p>
                Watch on the <img className={styles.image__hero__icon} />
                app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
