// ==UserScript==
// @name        Backpack.tf Filter by Custom Name
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://backpack.tf/classifieds/?item=Grenade%20Launcher&quality=11&tradable=1&craftable=1&page=3
// @version     1
// @grant       none
// ==/UserScript==

window.setTimeout(function(){
    $('[data-original-title*="Strange Grenade Launcher"]').parent().parent().parent().parent().remove()
}, 200)