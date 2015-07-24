// ==UserScript==
// @name        Go Back
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://thedailywtf.com/articles/*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @grant       none
// ==/UserScript==

$(function() {
   $(document).keypress(function(e){
       if($(":focus").length > 0) return;
       if(e.which == 13) //enter
       {    }
       else if(e.which == 32)
       {
          e.preventDefault();
          window.location = $('.previous-article a').attr('href')
       }
   });
});