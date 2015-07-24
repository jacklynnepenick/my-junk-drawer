// ==UserScript==
// @name        Powerschool Stay-Logged-In-er
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @description Keeps you logged in to powerschool
// @include     https://mtchs.powerschool.com/guardian/*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       none
// ==/UserScript==

var timeoutNum = 1000 * 60 * 3; //3Min

setTimeout(fixer,timeoutNum);

function fixer()
{
    if($(".warning .continueButton") != null)
    {
        $(".warning .continueButton").click();
        setTimeout(fixer,timeoutNum);
    }
    else alert("Error: Some kind of error.");
}