// ==UserScript==
// @name        Uncollapse Hiddens
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.tf2outpost.com/*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @grant       none
// ==/UserScript==

window.settimeout(function(){
    $(".offer.hidden").click();
}, 3000)