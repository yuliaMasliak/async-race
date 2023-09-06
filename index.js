import { basis, resultCountCar } from './src/api.js';
import { eventListeners } from './src/events.js';

import './style.css';
import './src/images/car.svg';
import './src/images/flag.png';
import './src/images/logo.png';
import './src/images/play.png';
import './src/images/stop.png';
import './src/images/track.png';

function renderContent() {
  basis();
  resultCountCar();
  eventListeners();
}

renderContent();
