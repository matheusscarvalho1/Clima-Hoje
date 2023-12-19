import styles from "./WeatherDetailsItem.module.css";

const WeatherDetailsItem = ({ title, img, alt, info, span }) => {
  return (
    <>
      <div className={styles.WeatherDetailsItem}>
        <p>{title}</p>
        <div>
          <img src={img} alt={alt} />
          <p>{info}</p>
          <span>{span}</span>
        </div>
      </div>
    </>
  );
};

export default WeatherDetailsItem;
