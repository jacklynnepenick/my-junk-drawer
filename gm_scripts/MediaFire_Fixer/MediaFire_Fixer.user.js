// ==UserScript==
// @name        MediaFire Fixer
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.mediafire.com/download/*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       none
// ==/UserScript==

$('*').attr('onclick', '');
$('*').unbind('click');
//window.location = $('.download_link a').attr('href');