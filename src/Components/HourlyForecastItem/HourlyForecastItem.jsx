import styles from "./HourlyForecastItem.module.css";

const HourlyForecastItem = ({ hour, img, alt, temp }) => {
  return (
    <>
      <div className={styles.hourlyForecastItem}>
        <p>{hour}</p>
        <img src={img} alt={alt} />
        <p>{temp}</p>
      </div>
    </>
  );
};

export default HourlyForecastItem;
