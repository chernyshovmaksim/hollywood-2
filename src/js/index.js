import 'animate.css';
import './../styles/main.scss';

import WOW from 'wow.js';
import Header from './components/header';
import Preload from './components/preload';
import Scroll from './components/scroll';

$(document).ready(() => {
	new WOW().init();
  Preload();
  Scroll();
	Header.headerFullScreen();
});
