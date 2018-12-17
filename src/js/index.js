import 'animate.css';
import './../styles/main.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';

import 'owl.carousel';
import WOW from 'wow.js';
import Header from './components/header';
import Preload from './components/preload';
import Scroll from './components/scroll';
import Parallax from './components/paralax';

$(document).ready(() => {
	new WOW().init();
  Preload();
	Scroll();
	Parallax();
	Header.headerFullScreen();

	$(document).ready(function(){
		$('.owl-carousel').owlCarousel();
	});
});
