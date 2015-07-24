// ==UserScript==
// @name        Keyboard=Leapard
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @include     *
// @version     1
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @grant       none
// ==/UserScript==


//Run "maincode" on page load and on update.  Thanks, stackoverflow! http://stackoverflow.com/questions/11036542/how-can-i-run-a-greasemonkey-script-when-page-changed-via-ajax
$(document).ready(function(){
    mainCode();
    unsafeWindow.$(document).ajaxSuccess(function(e, xhr, opt) {
        mainCode();
    });
});
                  
function mainCode(){
    var textnodes = document.evaluate( "//body//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    for(var i = 0; i < textnodes.snapshotLength; i++){
        node = textnodes.snapshotItem(i);
        node.data = node.data
           .replaceWithCase("keyboard", "leopard")
           .replaceWithCase("(some )?witnesses", "these dudes I know")
           .replaceWithCase("(a )?witness", "this dude I know")
           .replaceWithCase("allegedly", "kinda probably")
           .replaceWithCase("new study", "Tumblr post")
           .replaceWithCase("rebuild", "avenge")
           .replaceWithCase("space", "SPAAAACE")
           .replaceWithCase("google glass", "virtual boy")
           .replaceWithCase("smartphone", "Pokédex")
           .replaceWithCase('electric' , 'atomic')
           .replaceWithCase('senator' , 'elf-lord' )
           .replaceWithCase('car(?!eer)' , 'cat' )
           .replaceWithCase('industry' , 'jungle' )
           .replaceWithCase('industries' , 'jungles' )
           .replaceWithCase('company' , 'swarm of monkeys' )
           .replaceWithCase('companies' , 'swarms of monkeys' )
           .replaceWithCase('CEOs' , 'leaders of the monkeys' )
           .replaceWithCase('CEO' , 'leader of the monkeys' )
           .replaceWithCase('election' , 'eating contest' )
           .replaceWithCase('congressional leaders' , 'river spirits')
           .replaceWithCase('homeland security' , 'homestar Runner' )
           .replaceWithCase('could not be reached for comment' , 'is guilty and everyone knows it' )
           .replaceWithCase('force', 'horse')//*/
                            ;
    }
}

String.prototype.replaceWithCase = function(search, target) {
    return this.replace(new RegExp(search.wordcap(), 'g'), target.initcap())
       .replace(new RegExp(search, 'g'), target)
       .replace(new RegExp(search, 'gi'), target.toUpperCase());
}
                        
String.prototype.wordcap = function () {
    return this.replace(/\b./g, function (match) {
        return match.toUpperCase();
    });
};
                        
String.prototype.initcap = function () {
    return this.replace(/^./, function (match) {
        return match.toUpperCase();
    });
};

String.prototype.a = function() {
    alert(this);
    return this;
}; 