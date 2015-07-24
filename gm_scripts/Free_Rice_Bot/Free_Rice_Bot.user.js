// ==UserScript==
// @name        Free Rice Bot
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @description Gets Free Rice
// @include     http://freerice.com/#/chemical-symbols-basic/*
// @version     1
// @grant       none
// ==/UserScript==

if($('.question-link').html() == "Radium")
{
    $("a.answer-item:contains(Ra)").click();
}
else if($('.question-link').html() == "Zinc")
{
    $("a.answer-item:contains(Zn)").click();
}
else if($('.question-link').html() == "Manganese")
{
    $("a.answer-item:contains(Mn)").click();
}
else if($('.question-link').html() == "Nickel")
{
    alert("");
    $("a.answer-item:contains(Ni)").click();
}
