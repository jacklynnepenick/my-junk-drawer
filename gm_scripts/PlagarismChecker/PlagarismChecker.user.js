// ==UserScript==
// @name        PlagarismChecker
// @namespace   C:\
// @description Checks that annoying plagerism box
// @include     http://cds.mtchs.org/*
// @version     1
// @require     http://code.jquery.com/jquery-2.0.3.min.js
// @grant       none
// ==/UserScript==
$(document).ready(function(){
if(document.getElementById("fitem_id_submissionstatement") != null)
{
    fixThings();
    /*window.onload = myMethod;
    var furl = 'http://upload.wikimedia.org/wikipedia/commons/2/22/Animated_fire_by_nevit.gif';
    document.getElementById("fitem_id_submissionstatement").parentNode.innerHTML += "<img id='inject_fire' src='" + furl + 
        "' width='950' height='325' style='position:relative;top:-325px;left:150px;opacity:1;' />";*/
}});

function myMethod()
{
    
    //document.getElementsByTagName('head')[0].innerHTML += 
    //    "<style> #inject_fire {opacity:0;} .inject_fire_class {transition:opacity 2s; opacity:1;} </style>";
    //document.getElementById("inject_fire").delay(2000).animate({"opacity": "1"}, 700);​
    //document.getElementById("inject_fire").classList.add("inject_fire_class");
}

function fixThings()
{
    $("#id_submissionstatement")[0].checked = true; 
    $("#fitem_id_submissionstatement").css("display","none");
    $(".fdescription.required").css("display","none");
    /*
    $("#fitem_id_submissionstatement").append("<img id='FIAH' src='http://www.code3props.com/Animated_fire_by_nevit.gif' alt />");
    $("#FIAH").css("display", "none");
    $("#FIAH").css("position", "relative");
    $("#FIAH").css("float", "left");
    $("#FIAH").css("top", "0px");
    $("#FIAH").css("left", "0px");
    $("#FIAH").css("width", "100%");
    $("#FIAH").css("height", "100%");
    $("#FIAH").css("opacity", "0");
    $('#FIAH').fadeIn('slow');
    //$("#fitem_id_submissionstatement").delay(1000).fadeOut('fast'); */
}
