import styles from "./WeatherDetails.module.css";

import WeatherDetailsItem from "../WeatherDetailsItem/WeatherDetailsItem";
const WeatherDetails = () => {
  return (
    <>
      <div className={styles.WeatherDetailsContainer}>
        <WeatherDetailsItem
          title="Sensação Térmica"
          img="./images/temperature.svg"
          alt="Sensação Térmica"
          info="42º"
        />
        <WeatherDetailsItem
          title="Chance de Chuva"
          img="./images/rain.svg"
          alt="Chance de Chuva"
          info="10%"
        />
        <WeatherDetailsItem
          title="Vento"
          img="./images/wind.svg"
          alt="Sensação Térmica"
          info="2"
          span="km/h"
        />
        <WeatherDetailsItem
          title="Índice UV"
          img="./images/uv.svg"
          alt="Velocidade do vento"
          info="5"
        />
      </div>
    </>
  );
};

export default WeatherDetails;
