// ==UserScript==
// @name        MoodleGoToLoginPage
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://cds.mtchs.org/*
// @version     1
// @require     http://code.jquery.com/jquery-2.0.3.min.js
// @grant       none
// ==/UserScript==

if($('#yui_3_13_0_2_1393872604720_129').attr('href') !=undefined)
{
    window.location.href = $('#yui_3_13_0_2_1393872604720_129:contains("Log In")').attr('href');
}