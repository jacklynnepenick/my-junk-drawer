// ==UserScript==
// @name        DefaultCheckBoxInverter
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @description Checks boxes that are unchecked by default and unchecks boxes that are checked by default.
// @include     *
// @version     1
// @require     http://code.jquery.com/jquery-2.0.3.min.js
// @grant       none
// ==/UserScript==

$('.myCheckbox').prop('checked', !$('.myCheckbox').prop('checked'););