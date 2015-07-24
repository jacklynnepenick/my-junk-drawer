// ==UserScript==
// @name        set_me_email
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://legislature.idaho.gov/about/contactmembersform.cfm*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==
/*
$(function() {
  GM_setValue('emails',GM_getValue('emails', '') + $('#toemail').attr('value') + ',');
  window.setTimeout(function() {
    alert(GM_getValue('emails'));
    window.close();  
  }, 500);
})*/