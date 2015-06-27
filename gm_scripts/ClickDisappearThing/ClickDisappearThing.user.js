// ==UserScript==
// @name        ClickDisappearThing
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     *
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js  
// @grant       none
// ==/UserScript==

$('body *').click(function(e){
    
    if($(this).children().length == 0 || determineIfInlineChildren($(this)))
    {
        $(this).fadeOut();
        $(this).remove();
    }
    e.preventDefault();
});

function determineIfInlineChildren(o)
{
    for (var i = 0; i < o.length; i++)
    {
        var child = $(o.children()[i]);
        if(!(child.css('display') == 'inline' || child.css('display') == 'none' || determineIfHiddenChildren(child)))
        {
            return false;
        }
    }
    return true;
}

function determineIfHiddenChildren(o)
{
    for (var i = 0; i < o.length; i++)
    {
        var child = $(o.children()[i]);
        if(!(child.css('display') == 'none' || determineIfHiddenChildren(child)))
        {
            return false;
        }
        else
        {
            child.remove();
        }
    }
    if(/^\s*$/.test(o.html()))  return true;
    return false;
}