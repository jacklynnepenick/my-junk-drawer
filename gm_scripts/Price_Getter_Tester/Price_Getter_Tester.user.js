// ==UserScript==
// @name        Price Getter Tester
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @description Testing for scrap.tf price getter
// @include     http://backpack.tf/pricelist/spreadsheet
// @version     1
// @grant       none
// ==/UserScript==
var item = "A Brush with Death";

var items = document.getElementById('pricelist').getElementsByTagName('th');
for(var i = 0; i<items.length;i++)
{
    if(item[i].innerHTML == item)
    {
        alert("4!");
        alert(item[i].parentNode.getElementsByClassName('q6')[0].getElementsByTagName('a')[0]);
        break;
    }
}
function alerk()
{
    alert("hello");
    return "";
}