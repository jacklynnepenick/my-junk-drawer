// ==UserScript==
// @name        giv me email
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     http://legislature.idaho.gov/about/contactbycommittee.cfm
// @include     http://legislature.idaho.gov/about/contactmembersform.cfm*
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       GM_openInTab
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

console.log(GM_getValue('emails'));

$(function() {
  if(window.location.href.match(/contactmembersform/)) {
      emails = GM_getValue('emails', '');
      GM_setValue('emails', emails + $('#toemail').attr('value') + ',');
      window.setTimeout(function() {
        window.close();  
      }, 500);
  }
  else {
    $(function() {
      $('a:contains(E-mail)').each(function(i, el) {
        window.setTimeout(function() {
          if(el.href.match(/contactmembersform/)) {
            GM_openInTab(el.href);
            console.log(GM_getValue('emails', ''));
          }
        }, 500 * i);
      });
     /*for (var i = 0; i < $email_links.length; i++) {
        window.setTimeout(function() {
          console.log($email_links[i]);
          if($($email_links[i]).attr('href').match(/contactmembersform/)) {
            GM_openInTab($($email_links[i]).attr('href'));
            console.log(GM_getValue('emails', ''));
          }
        }, 6000 * i);
      }*/
    });
  }
})