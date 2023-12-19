import { Helmet } from "react-helmet";

import AppContainer from "./Components/Template/Container/AppContainer";
import Navbar from "./Components/Navbar/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import HourlyForecast from "./Components/HourlyForecast/HourlyForecast";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";
import WeeklyForecast from "./Components/WeeklyForecast/WeeklyForecast";

const App = () => {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <title>Clima Hoje</title>
        <link rel="./favicon" type="image/x-icon" />
      </Helmet>
      <AppContainer>
        <div>
          <Navbar />
          <Showcase />
          <HourlyForecast />
          <WeatherDetails />
        </div>
        <div>
          <WeeklyForecast />
        </div>
      </AppContainer>
    </>
  );
};

export default App;
