// ==UserScript==
// @name        SpinThemRightRoundBaby
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.ryanbenson.info/2048/
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       none
// ==/UserScript==

var rotation = 0;

jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};

SpinThemRightRound();

function SpinThemRightRound()
{
    rotation += 20;
    rotation %= 360;
    $('.tile-inner').rotate(rotation);
    setTimeout(SpinThemRightRound, 100);
}