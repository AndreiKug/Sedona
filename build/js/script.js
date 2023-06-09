var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
	if (navMain.classList.contains('main-nav--closed')) {
		navMain.classList.remove('main-nav--closed');
		navMain.classList.add('main-nav--opened');
	} else {
		navMain.classList.add('main-nav--closed');
		navMain.classList.remove('main-nav--opened');
	}
});

//Sprite SVG
!function(a,b){"use strict";var c="img/symbols.svg",d=1;if(!b.createElementNS||!b.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect)return!0;var e,f,g="localStorage"in a&&null!==a.localStorage,h=function(){b.body.insertAdjacentHTML("afterbegin",f)},i=function(){b.body?h():b.addEventListener("DOMContentLoaded",h)};if(g&&localStorage.getItem("inlineSVGrev")==d&&(f=localStorage.getItem("inlineSVGdata")))return i(),!0;try{e=new XMLHttpRequest,e.open("GET",c,!0),e.onload=function(){e.status>=200&&e.status<400&&(f=e.responseText,i(),g&&(localStorage.setItem("inlineSVGdata",f),localStorage.setItem("inlineSVGrev",d)))},e.send()}catch(j){}}(window,document);