// ==UserScript==
// @name        Scroller
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @description Scrolls down to next *whoknows* when you press the ` key.  Not to be combined with other ` key extensions.
// @include     *
// @version     1
// @require     http://code.jquery.com/jquery-2.0.3.min.js
// @grant       none
// ==/UserScript==

var i = 0;
var loc = ".rating.starRatingOne";
$(document).keypress(function(e) {
    if(e.which == 96)
    {
        $('html, body').animate({
            scrollTop: $($(loc)[i]).offset().top - 300
        }, 2000);
        i++;
        if(i >= $(loc).length)
        {
           i=0;
        }
    }
});