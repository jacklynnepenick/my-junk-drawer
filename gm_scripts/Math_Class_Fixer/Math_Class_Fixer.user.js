// ==UserScript==
// @name        Math Class Fixer
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://cds.mtchs.org/moodle/course/view.php?*id=46*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @grant       none
// ==/UserScript==

$('li.section.main.clearfix').css('display','none');
var curWeek = $('li.section.main.clearfix:not(.hidden):last');
curWeek.css('display','block');
curWeek.after('<a href="#" id="gmShowAllIDMon">Show All</a>');
var ShowAllButton = $('#gmShowAllIDMon');
ShowAllButton.click(ToggleShowAll);


function ToggleShowAll()
{
    if(ShowAllButton.html() == 'Show All')
    {
        $('li.section.main.clearfix:not(.hidden)').css('display','block');
        ShowAllButton.html('Hide Stuff');
    }
    else if(ShowAllButton.html() == 'Hide Stuff')
    {
        $('li.section.main.clearfix:not(.hidden)').css('display','none');
        curWeek.css('display','block');
        ShowAllButton.html('Show All');
    }
}