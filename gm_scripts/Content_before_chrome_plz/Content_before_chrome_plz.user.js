// ==UserScript==
// @name        Content before chrome plz
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://supreme.justia.com/cases/federal/us/330/1/case.html
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js  
// @grant       none
// ==/UserScript==

$('#content').css('position','fixed');
$('#content').css('overflow','scroll');
$('#content').css('left','0');
$('#content').css('top','0');
$('#content').css('width','100%');
$('body, html').css('overflow','hidden');