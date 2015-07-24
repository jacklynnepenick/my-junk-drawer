// ==UserScript==
// @name        NEXT
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.darthsanddroids.net/episodes/*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       none
// ==/UserScript==

$(document).keypress(function(e){
    if(e.which == 13 || e.which == 47)
    {
        window.location = $("a:contains('NEXT>')").attr('href'); 
    }
});