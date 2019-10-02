/**
 * @file main.js
 * File Created: Tuesday, 24th September 2019 8:45:56 am
 * @author: yida
 * -----
 * Last Modified: Tuesday, 24th September 2019 8:46:02 am
 * Modified By: yida
 */
import $ from 'jquery';
import slick from 'slick-carousel';

const $backgroundAudio = document.getElementById('background-audio');

// init carousel
$('.pic').slick({
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    cssEase: 'linear'
});