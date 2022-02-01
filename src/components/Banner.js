import { useFlags } from 'launchdarkly-react-client-sdk';
import styles from '../css/Banner.module.css';

function Banner({ isIncident }) {
  const { messagingIncidentType } = useFlags();
  const spotsLeft = Math.floor(Math.random() * 20);

  return (
    <div className={styles.banner}>
      { !isIncident && <p className={styles.bannerText}>Only {spotsLeft} seats left!</p> }
      { isIncident && <p className={styles.bannerText}>
        We're aware of an outage affecting our {messagingIncidentType}. Our team is working to fix it, thanks for your patience!
      </p> }
    </div>
  );
}

export default Banner;
