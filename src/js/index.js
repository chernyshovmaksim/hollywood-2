import "animate.css";
import "./../styles/main.scss";

import Header from "./components/header";
import Preload from './components/preload';
import Scroll from './components/scroll';

$(document).ready(() => {
	Preload();
	Scroll();
	Header.headerFullScreen();
});
