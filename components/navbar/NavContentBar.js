import React, { useEffect, useState } from 'react';

import styles from './NavBar.module.scss';
import { useHistory } from 'react-router-dom';

const NavContentBar = () => {
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

  const handleRedirect = () => {
    const externalURL = 'https://tv.apple.com/';
    window.open(externalURL, '_blank'); // Open in a new tab/window
    // Alternatively, you can use the following line to navigate in the same tab
    // window.location.href = externalURL;
  };

  return (
    <div>
      <nav className={`navbar__content__container ${isSticky ? 'sticky' : ''}`}>
        <div className={styles.navbar__title}>Apple TV+</div>
        <div>
          <button onClick={handleRedirect} className={styles.navbar__streambtn}>
            Stream now
          </button>
        </div>
      </nav>
    </div>
  );
};

export default NavContentBar;
