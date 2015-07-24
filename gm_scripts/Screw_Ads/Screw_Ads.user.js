// ==UserScript==
// @name        Screw Ads
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.writing.com/*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @grant       none
// ==/UserScript==

$('iframe').remove();
$('#ad_div_col').empty();