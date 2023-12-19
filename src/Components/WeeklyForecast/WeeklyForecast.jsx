import styles from "./WeeklyForecast.module.css";
import WeeklyForecastItem from "../WeeklyForecastItem/WeeklyForecastItem";
const WeeklyForecast = () => {
  return (
    <>
      <div className={styles.weeklyForecastContainer}>
        <WeeklyForecastItem
          DayWeek="Segunda"
          img="./images/sun clouds.svg"
          alt="Sol com nuvens"
          tempMax="40°"
          tempMin="32°"
        />
        <WeeklyForecastItem
          DayWeek="Terça"
          img="./images/sun-m.svg"
          alt="Ensolarado"
          tempMax="40°"
          tempMin="33°"
        />
        <WeeklyForecastItem
          DayWeek="Quarta"
          img="./images/sun-m.svg"
          alt="Ensolarado"
          tempMax="39°"
          tempMin="32°"
        />
        <WeeklyForecastItem
          DayWeek="Quinta"
          img="./images/sun clouds.svg"
          alt="Sol com poucas nuvens"
          tempMax="37°"
          tempMin="30°"
        />
        <WeeklyForecastItem
          DayWeek="Sexta"
          img="./images/clouds.svg"
          alt="Nublado"
          tempMax="35°"
          tempMin="30°"
        />
        <WeeklyForecastItem
          DayWeek="Sábado"
          img="./images/rain-2.svg"
          alt="Chuvoso"
          tempMax="32°"
          tempMin="28°"
        />
        <WeeklyForecastItem
          DayWeek="Domingo"
          img="./images/sun clouds.svg"
          alt="Sol com nuvens"
          tempMax="35°"
          tempMin="30°"
        />
      </div>
    </>
  );
};

export default WeeklyForecast;
