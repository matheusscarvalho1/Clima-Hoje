import styles from "./HourlyForecast.module.css";

import HourlyForecastItem from "../HourlyForecastItem/HourlyForecastItem";

const HourlyForecast = () => {
  return (
    <>
      <div className={styles.hourlyForecastContainer}>
        <HourlyForecastItem
          hour="6:00 AM"
          img="./images/sun cloud.svg"
          alt="Sol com núvens"
          temp="32°"
        />
        <HourlyForecastItem
          hour="9:00 AM"
          img="./images/sun clouds-m.svg"
          alt="Sol com poucas núvens"
          temp="37°"
        />
        <HourlyForecastItem
          hour="12:00 PM"
          img="./images/sun clouds-m.svg"
          alt="Ensolarado"
          temp="38°"
        />
        <HourlyForecastItem
          hour="3:00 PM"
          img="./images/sun-m.svg"
          alt="Ensolarado"
          temp="36°"
        />
        <HourlyForecastItem
          hour="6:00 PM"
          img="./images/clouds.svg"
          alt="Nublado"
          temp="36°"
        />
        <HourlyForecastItem
          hour="9:00 PM"
          img="./images/moon clouds.svg"
          alt="Noite com núvens"
          temp="28°"
        />
      </div>
    </>
  );
};
export default HourlyForecast;
