// ==UserScript==
// @name        Dilbert Random Button
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.dilbert.com/*
// @include     http://dilbert.com/*
// @version     1
// @grant       none
// ==/UserScript==

$(function() {
   if($('img.img-responsive.img-comic').attr('height') > 600) {
      $(window).scrollTop(200);
   }
   $(document).keypress(function(e){
       if($(":focus").length > 0) return;
       if(e.which == 13)
       {
          e.preventDefault();
          function pad(n){return n<10 ? '0'+n : n} var now = Date.now(); var offset = (new Date(2007, 01, 01)).valueOf(); var rdate = new Date(offset + Math.round(Math.random() * (now-offset))); location.href = 'http://dilbert.com/strips/comic/' + rdate.getFullYear() + '-' + pad(rdate.getMonth()+1) + '-' + pad(rdate.getDate()) + '/';
       }
       else if(e.which == 32)
       {
          e.preventDefault();
          window.location = $('div.nav-comic.nav-right a[alt="Newer Strip"]').attr('href');
       }
   });
});