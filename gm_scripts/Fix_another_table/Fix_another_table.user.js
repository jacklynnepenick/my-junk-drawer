// ==UserScript==
// @name        Fix another table
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://www.nytimes.com/interactive/2012/07/08/education/edlife/8edlife_chart.html*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       none
// ==/UserScript==

var i;
var thead = $('#nytg-aid thead tr');

thead.append('<th> Residual COA </th>');

var rows = $('#nytg-aid tbody tr');
var tuition;
var aid;
for(i = 0; i < rows.length; i++)
{
    tuition = Number($(rows[i]).find('.nytg-tuition').html().replace(/[^0-9\.]+/g,""));
    aid = Number($(rows[i]).find('.nytg-avg-aid').html().replace(/[^0-9\.]+/g,""));
    $(rows[i]).append('<td> $' + (tuition - aid).toLocaleString() + '</td>');
}
rows = $('#nytg-aid thead tr th'); //really cols, but who cares
for(i = 0; i < rows.length; i++)
{
    $(rows[i]).css('width', $(rows[i]).width() + 'px');
    $('#nytg-aid tbody tr td:nth-child(' + (i+1) + ')').css('width', $(rows[i]).width() + 'px')
}

thead.css('height', thead.height() + 'px');
thead.css('width', thead.width() + 'px');
thead.css('left', thead.offset().left + 'px');

$(document).scroll(function() {

    if($('#nytg-aid').offset().top < $(document).scrollTop())
    {
        thead.css('position', 'fixed');
        thead.css('top', '0');
        thead.css('background-color', '#FFF');
    }
    else
    {
        thead.css('position', '');
        thead.css('top', '');
        thead.css('background-color', '');
    }
});