import styles from '../css/Banner.module.css';

function Banner() {
  const spotsLeft = Math.floor(Math.random() * 20);

  return (
    <div className={styles.banner}>
      <p className={styles.bannerText}>Only {spotsLeft} seats left!</p>
    </div>
  );
}

export default Banner;
