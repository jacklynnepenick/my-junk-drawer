// ==UserScript==
// @name        KeyDetector
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @description Determine which key you just pushed.  Do not activate with any other plugins
// @include     *
// @version     1
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @grant       none
// ==/UserScript==

$(document).keypress(function(e){
    alert(e.which);
});