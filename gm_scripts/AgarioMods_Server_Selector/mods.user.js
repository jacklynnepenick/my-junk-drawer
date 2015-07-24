﻿// ==UserScript==
// @name       AgarioMods Server Selector
// @namespace	 electronoob-agarmods
// @version      1.7.3
// @description  community run mod feature set for agar.io
// @author       electronoob
// @match        http://agar.io
// @grant        none
// ==/UserScript==

var script = document.createElement('script');
script.src = "http://agariomods.com/mods.js";
(document.body || document.head || document.documentElement).appendChild(script);

/*
repo:
https://github.com/electronoob/agarmods

common website for all mods from anybody:
http://www.agariomods.com

*/
