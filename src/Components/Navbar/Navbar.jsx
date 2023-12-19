import styles from "./Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbarContainer}>
        <img src="./images/logo.svg" alt="Clima Hoje" />
        <input
          className={styles.customInput}
          type="text"
          name="city"
          id="city"
          placeholder="Procure por cidades"
        />
      </nav>
    </>
  );
};

export default Navbar;
