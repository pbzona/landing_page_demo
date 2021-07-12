import React from 'react';
import Container from './Container';
import styles from '../css/TextBox.module.css';

function TextBox() {
  return (
    <Container>
      <p className={styles.textBox}>
        For years, they said space tourism was impossible. We've proven them
        wrong. Sign up below to reserve your seat on our one-of-a-kind civilian
        space shuttle that features modern amenities to ensure your comfort as
        you look out the window at our planet in zero gravity. Seating is
        limited, book now to ensure you have a place in history.
      </p>
    </Container>
  );
}

export default TextBox;
