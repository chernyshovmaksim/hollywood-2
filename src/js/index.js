import 'animate.css';
import './../styles/main.scss';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'jquery.mmenu/dist/jquery.mmenu.css';

import 'owl.carousel';
import 'jquery.mmenu/dist/jquery.mmenu';
import 'jquery.mmenu/dist/addons/pagescroll/jquery.mmenu.pagescroll';
import WOW from 'wow.js';
import Header from './components/header';
import Preload from './components/preload';
import Parallax from './components/parallax';

$(document).ready(() => {
  new WOW().init();
  Preload();
  Parallax();
	Header.headerFullScreen();
	
	$('#my-menu').mmenu({
		"pageScroll": true
	});
	const API = $("#my-menu").data( "mmenu" );
	$('.mobile-menu').on('click', () => {
		API.open();
	});

  $('.owl-carousel').owlCarousel({
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			560: {
				items: 2,
				nav: true
			},
			812: {
				items: 3
			}
		}
	});
});
