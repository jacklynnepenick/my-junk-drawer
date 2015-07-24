// ==UserScript==
// @name        Ena Fixer
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://services.ena.com/cwp/ws.php?*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @grant       none
// ==/UserScript==

window.location.href = $('.view-success p:contains("http")').html().replace(/.*http/, "https").replace(").","");