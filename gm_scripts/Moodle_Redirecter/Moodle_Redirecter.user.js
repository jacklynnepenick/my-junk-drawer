// ==UserScript==
// @name        Moodle Redirecter
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @description Takes those moodle links that you have to left click onto to open a new tab and fixes them so middle click won't just spit out a link.
// @include     http://cds.mtchs.org/*
// @version     1
// @grant       none
// ==/UserScript==

if(document.getElementsByClassName("urlworkaround")[0] != null && 
    document.getElementsByClassName("urlworkaround")[0].getElementsByTagName("a")[0] != null)
{
    window.location.href = document.getElementsByClassName("urlworkaround")[0].getElementsByTagName("a")[0].innerHTML;
}