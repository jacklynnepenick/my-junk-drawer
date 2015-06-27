// ==UserScript==
// @name        Kill all members
// @namespace   derrr
// @include     https://www.facebook.com/events*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @grant       none
// ==/UserScript==

$(document).keypress(function() {
  if(confirm('Really?')) {
   $('.uiCloseButton').click();
  }
});