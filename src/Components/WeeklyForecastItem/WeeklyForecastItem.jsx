import styles from "./WeeklyForecastItem.module.css";

const WeeklyForecastItem = ({ DayWeek, img, alt, tempMax, tempMin }) => {
  return (
    <>
      <div className={styles.DayWeatherItem}>
        <p>{DayWeek}</p>
        <img src={img} alt={alt} />
        <div>
          <p>{tempMax}</p>
          <p>{tempMin}</p>
        </div>
      </div>
    </>
  );
};

export default WeeklyForecastItem;
