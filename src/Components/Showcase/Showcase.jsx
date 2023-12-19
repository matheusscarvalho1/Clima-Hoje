import styles from "./Showcase.module.css";

const Showcase = () => {
  return (
    <>
      <div className={styles.showcaseContainer}>
        <div className={styles.showcaseText}>
          <h2>Cuiabá</h2>
          <p>Chance de chuva 10%</p>
          <h2>40°</h2>
        </div>
        <img src="./images/sun clouds.svg" alt="Sol com nuvens" />
      </div>
    </>
  );
};

export default Showcase;
