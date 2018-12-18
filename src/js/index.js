import './../styles/main.scss';
import 'animate.css';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'jquery.mmenu/dist/jquery.mmenu.css';

import 'owl.carousel';
import 'jquery.mmenu/dist/jquery.mmenu';
import 'jquery.mmenu/dist/addons/pagescroll/jquery.mmenu.pagescroll';
import WOW from 'wow.js';
import Header from './components/header';
import Mmenu from './components/mmenu';
import Owl from './components/owl';
import Preload from './components/preload';
import Parallax from './components/parallax';
import Lazyload from './components/lazyload';

$(document).ready(() => {
	Mmenu();
  new WOW().init();
  Preload();
  Parallax();
	Header.headerFullScreen();
  Owl();
  Lazyload();
});
