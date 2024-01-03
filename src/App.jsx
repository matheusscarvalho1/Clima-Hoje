import AppContainer from "./Components/Template/Container/AppContainer";
import Navbar from "./Components/Navbar/Navbar";
import Showcase from "./Components/Showcase/Showcase";
import HourlyForecast from "./Components/HourlyForecast/HourlyForecast";
import WeatherDetails from "./Components/WeatherDetails/WeatherDetails";
import WeeklyForecast from "./Components/WeeklyForecast/WeeklyForecast";

const App = () => {
  return (
    <>
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
