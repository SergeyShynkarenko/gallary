// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

const swiperBundleMin = require('../libs/swiper/swiper-bundle.min')

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

require('../libs/swiper/swiper-bundle.min')
// require('../libs/swiper/swiper-bundle.min.js.map')

document.addEventListener('DOMContentLoaded', () => {

	const sliderMain = new swiperBundleMin('.slider_main', {
		freeMode: true,
		centeredSlides: true,
		mousewheel: true,
		parallax: true,
		breakpoints: {
			0: {
				slidesPerView: 2.5,
				spaceBetween: 20
			},
			680: {
				slidesPerView: 3.5,
				spaceBetween: 60
			}
		}
	})

	const sliderBg = new swiperBundleMin('.slider_bg', {
		centeredSlides: true,
		parallax: true,
		spaceBetween: 60,
		slidesPerView: 3.5
	})

	sliderMain.controller.control = sliderBg

	document.querySelectorAll('.slider__item').forEach(item => {
		item.addEventListener('click', event => {
			item.classList.toggle('opened')
		})	
	})

	const desc = document.querySelector('.description')
	sliderMain.on('slideChange', e => {
		sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
	})
})
