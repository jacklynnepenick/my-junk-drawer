// ==UserScript==
// @name        Random!
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.explainxkcd.com/*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js  
// @grant GM_addStyle
// ==/UserScript==

var url = 'http://www.explainxkcd.com/wiki/index.php/Special:Random';
$(document).keypress(function(e){
    if(e.which == 32 && $(':focus').length == 0)
   {
       window.location=url;
       e.preventDefault();
   }
    
});


GM_addStyle(
    '[href*="projectwonderful.com"] { display:none; }'
);