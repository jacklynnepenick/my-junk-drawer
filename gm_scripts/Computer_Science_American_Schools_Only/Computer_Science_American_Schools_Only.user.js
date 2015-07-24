// ==UserScript==
// @name        Computer Science American Schools Only
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.shanghairanking.com/SubjectCS2013.html
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js  
// @grant       none
// ==/UserScript==

$('#UniversityRanking tr:not(:has(td img[src="image/flag/USA.png"]))').remove();