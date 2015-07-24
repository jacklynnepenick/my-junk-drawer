// ==UserScript==
// @name        Backpack.tf, why u do dis?
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://backpack.tf/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require     file:///C:/Users/Jack/Desktop/Downloads/outerHTML-2.1.0-min.js
// @version     1
// @grant       GM_addStyle
// ==/UserScript==

//CONSTANTS
var REF_VALUE = 1;
var CRAFT_HAT_VALUE = 1 + 3 / 9;
var KEY_VALUE = 8 + 2 / 9;
var BUD_VALUE = 19 * KEY_VALUE;
var HIDE_BAD_DEALS = true;
//var MARK_GOOD_DEALS = false; //Not available yet

//FUNCTIONS

// Convert currency into ref 
function normalize_currency(cur) {
    if (typeof cur !== 'string') {
        alert('GM Error: Cur is not a string');
        return NaN;
    }
    //Deal with more than 1 currency listed
    if ((parts = cur.split(',')).length > 1) {
        return parts.reduce(function(a, b) {
            return a + normalize_currency(b);
        }, 0)
    }
    //Break down the currency into number and unit
    match = cur.match(/^ *([0-9.]+) *([A-Za-z ]+?) *$/);
    if (match === null || match.length !== 3) {
        alert('GM Error: Cur is not a valid number - currency pair.  Value Given:' + cur)
        return NaN;
    }
    unit = match[2].toLowerCase();
    value = match[1];
    switch (unit) {
        case 'ref':
        case 'refs':
        case 'refined':firebug
        
            value = value * REF_VALUE;
            break;
        case 'craft hat':
        case 'craft hats':
            value = value * CRAFT_HAT_VALUE;
            break;
        case 'key':
        case 'keys':
            value = value * KEY_VALUE;
            break;
        case 'bud':
        case 'buds':
            value = value * BUD_VALUE;
            break;
        default:
            alert('GM Error: Unhandled currency ' + unit)
            return NaN;
            break;
    }
    return Number(value);
}

//MAIN CODE
$(function() {
    
$('object, iframe, img.img_ad').remove();

GM_addStyle('.popover { z-index: 9000000 !important }')

listings = $('ul.media-list li.media.listing');
listings.each(function(index){
    listing = $(listings[index]);
    item_icon = listing.find('.item-icon');
    item_icon.attr('id', 'item-icon' + $.now() + index)
    GM_addStyle('#item-icon' + $.now() + index + 
                '{ background-image:' + item_icon.attr('style').match(/background-image:(.*)/)[1] + '!important; display:block !important}')
    //alert(item_icon.css('background-image'));
    item_attributes_element = listing.find('div.media-object ul li.item')
});

});