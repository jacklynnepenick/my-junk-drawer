// ==UserScript==
// @name        Moodle Log Me In
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     *cds.mtchs.org*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       none
// ==/UserScript==


if(window.location.pathname == '/moodle/login/index.php')
{
    window.setTimeout(function() {
       $('#loginbtn').click();
    }, 1000);
}
else if($(".headermenu .logininfo [href='http://cds.mtchs.org/moodle/login/index.php']:contains('Log in')").length > 0)
{
    window.location = 'http://cds.mtchs.org/moodle/login/index.php';
}
else if (window.location.pathname == '/moodle/')
{
    goToCurrentClass();
}
else
{
    if($('.current').length > 0) {
        $('html, body').animate({
            scrollTop: $('.current').last().offset().top
        }, 1);
    }
    else {
        $('html, body').animate({
            scrollTop: $('.section.main.clearfix:not(.hidden):not(:has(.content .section.img-text:empty))').last().offset().top - window.innerHeight / 2
        }, 1);
    }
    $(document).keypress(function(e){
       if($(':focus').length != 0) return;
       else if(e.which == 13 && $('.fp-upload-btn').length == 0)
       {
           if ($('#loginbtn').length > 0) {
              $('#loginbtn').click();
           }
           else {
              goToCurrentClass();
           }
       }
       else if(e.which == 32)
       {
           console.log('fuck');
       }
    });
}

function goToCurrentClass()
{
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    if ((hour == 9 && minutes > 34) || (hour == 10 && minutes < 25))
    {
        window.location = 'http://cds.mtchs.org/moodle/course/view.php?id=61';
    }
    else if ((hour == 10 && minutes >= 25) || (hour == 11 && minutes <= 10))
    {
        window.location = 'http://cds.mtchs.org/moodle/course/view.php?id=65';
    }
    else if((hour == 11 && minutes >= 45) || (hour == 12 && minutes <= 40))
    {
        if(window.location == 'http://cds.mtchs.org/moodle/course/view.php?id=63') {
           window.location = 'http://cds.mtchs.org/moodle/course/view.php?id=66';
        }
        else {
           window.location = 'http://cds.mtchs.org/moodle/course/view.php?id=63';
        }
    }
    else
    {
        window.location = 'http://cds.mtchs.org/moodle/my/';
    }
}