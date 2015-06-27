// ==UserScript==
// @name        sign in/ out automagically
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     https://docs.google.com/a/mtchs.org/forms/d/11NWvlYebW9nHDHHSyVoDggg_Tip-LIcPWnY1LyVEi0c/viewform?embedded=true*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       none
// ==/UserScript==

var hour = (new Date()).getHours();
var minutes = (new Date()).getMinutes();

$('#emailReceipt').prop('checked', true)

if(hour == 12 && minutes < 40 && minutes > 35) {
  $('[aria-label="Sign out"]').prop('checked', true);
}
else if((hour == 7) || (hour == 8 && minutes < 5)) {
  $('[aria-label="Sign in"]').prop('checked', true);
}