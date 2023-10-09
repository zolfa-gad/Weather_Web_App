import WeatherHome from "./pages/weather-home";

function App() {
  return (
    <div className="App bg-backgroud min-vh-100 text-dark text-center d-flex flex-column justify-content-center align-items-center fs-3  ">
      <header className="App-header h-100 w-100">
        <WeatherHome />
      </header>
    </div>
  );
}

export default App;
