import React from 'react';
import Container from './Container';
import styles from '../css/ConvertButton.module.css';

import { useFlags } from 'launchdarkly-react-client-sdk';

function ConvertButton() {
  const { experimentRegistrationButtonColor } = useFlags();

  return (
    <Container>
      <button
        className={`convert-btn ${styles.convertButton} ${
          experimentRegistrationButtonColor === 'white'
            ? styles.convertButtonPrimary
            : styles.convertButtonAlt
        }`}
      >
        Register Now
      </button>
    </Container>
  );
}

export default ConvertButton;
