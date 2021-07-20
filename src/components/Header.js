import { useState } from 'react';
import styles from '../css/Header.module.css';

import store from 'store';
import md5 from 'md5';

import createUserContext from '../helpers/createUserContext';
import { useLDClient } from 'launchdarkly-react-client-sdk';

function Header() {
  const ldClient = useLDClient();
  const [username, setUsername] = useState('Sample User');

  function simulateLogin(event) {
    event.preventDefault();
    if (username) {
      store.set('username', username);
      store.set('key', md5(username));

      let ctx = createUserContext(username);

      ldClient.identify(ctx, null, function () {
        console.log(`Now logged in as: ${username}`);
      });
    }
  }

  function handleInputChange(event) {
    setUsername(event.target.value);
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>Book Your Trip to Space</h1>
      <form className={styles.form} onSubmit={simulateLogin}>
        <label className={styles.label} htmlFor="user">
          Username:{' '}
        </label>
        <input
          className={styles.input}
          type="text"
          name="user"
          value={username}
          onChange={handleInputChange}
        />
        <input className={styles.btn} type="submit" value="Log in" />
      </form>
    </header>
  );
}

export default Header;
