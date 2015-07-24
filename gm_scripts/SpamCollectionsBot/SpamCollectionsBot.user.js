// ==UserScript==
// @name        SpamCollectionsBot
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://bazaar.tf/collect
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       none
// ==/UserScript==

doStuff();

function doStuff()
{
    $('a.btn.btn-primary.btn-lg.pull-right.collect-items').click();
    window.setTimeout(function(){
        $('#buynow-modal-btn').click();
        window.setTimeout(doStuff,1000)
    }, 500);
}