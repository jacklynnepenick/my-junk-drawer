// ==UserScript==
// @name        Add Explain Button
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     *xkcd.com/*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js  
// @grant       none
// ==/UserScript==

var url = window.location.href.split("/");
var nurl = "http://www.explainxkcd.com/wiki/index.php/" + url[3];

$(document).ready(function(){
    $(".comicNav a:contains(Random)").parent().after(
        "<li><a href='" + nurl + "' target='_blank' id='explainbutton'>Explain</a></li>");
    
    $('#comic').append('<div style="padding: 0 80px;">' + $('#comic img').attr('title') + '</div>');
    
    $(window).scrollTop($('#comic img').offset().top - 15);
    
    $(document).keypress(function(e){
        if($(':focus').length != 0) {
            return;
        }
        if (e.which == 32)
        {
            window.location = $('a[rel="next"]').attr('href');
            e.preventDefault();
        }
        else if(e.which == 13)
         {  
             window.location = "http://c.xkcd.com/random/comic/";
         }
    });
});