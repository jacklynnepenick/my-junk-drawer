// ==UserScript==
// @name        Screw Ads (Sparknotes)
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.sparknotes.com/*
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @version     1
// @grant       none
// ==/UserScript==

$('.col-1-3.last').remove();
$('iframe, object').remove();

var midcol = $('.col-mid');
midcol.width(896);