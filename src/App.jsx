import WeatherApp from './components/WeatherApp'
import Header from './components/Header';
import { WeatherProvider } from './context/WeatherProvider';

function App() {

  return (
    <WeatherProvider>
      <Header />
      <WeatherApp />
    </WeatherProvider>
  )
}

export default App;
