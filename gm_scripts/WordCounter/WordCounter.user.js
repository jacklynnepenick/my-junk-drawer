// ==UserScript==
// @name        WordCounter
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     *
// @version     1
// @require     http://code.jquery.com/jquery-2.1.0.min.js
// @grant       none
// ==/UserScript==


$(function() {
  var victims = $('textarea, input:text');
  for(var i = 0; i < victims.length; i++) {
    var box = victims[i];
    var wordcount_box = $("<div class='gm_wc_wordcount'> Word count will go here </div>").insertAfter($(box));
    var delete_wordcount_box = $("<div class='gm_wc_wordcount_delete'> X </div>").appendTo(wordcount_box);
    var delete_wordcount_box_clickhandler = function() {
      wordcount_box.remove();
    };
    var box_keyuphandler = function() {
      var words = $(box).val().split(/\s/);
      var count = words.length;
      for(var j = 0; j < words.length; j++) {
        if(!/[a-zA-Z]/.test(words[j])) {
          count--;
        }
      }
      $(wordcount_box).html(count);
      delete_wordcount_box.appendTo(wordcount_box);
      delete_wordcount_box.click(delete_wordcount_box_clickhandler);
    };
    $(box).keyup(box_keyuphandler);
    delete_wordcount_box.click(delete_wordcount_box_clickhandler);
    box_keyuphandler();
  }
  
});