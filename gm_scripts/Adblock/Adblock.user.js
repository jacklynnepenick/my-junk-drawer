// ==UserScript==
// @name        Adblock
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.explainxkcd.com/*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js 
// @grant       none
// ==/UserScript==

$('[href*=projectwonderful.com]').remove();