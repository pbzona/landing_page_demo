import React from 'react';
import Container from './Container';
import styles from '../css/Logo.module.css';

function Logo() {
  return (
    <Container>
      <img
        className={styles.logo}
        src="/img/logo.png"
        alt="LaunchDarkly logo"
      ></img>
    </Container>
  );
}

export default Logo;
