// ==UserScript==
// @name        Citizenship Test Modifications
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://media.pearsoncmg.com/long/long_longman_media_1/citizenship_test/player.html
// @version     1
// @grant       none
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// ==/UserScript==

$('body').attr('bgcolor', '#aabbcc');
$('#mainplayer').css('text-align', 'center');
$('#mainplayer embed').css('display', 'inherit');
