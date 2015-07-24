// ==UserScript==
// @name        wyzant hax
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @description Hax Wyzant
// @include     http://www.wyzant.com/scholarships/v4/essay86514-Boise-ID.aspx
// @version     1
// @grant       none
// ==/UserScript==
var newInput = '<input type=image name="ctl00$ctl00$ctl00$ctl00$PageCPH$CenterColumnCPH$CenterColumnCPH$CenterColumnCPH$VoteBTN_Sm$VoteBTN" id=ctl00_ctl00_ctl00_ctl00_PageCPH_CenterColumnCPH_CenterColumnCPH_CenterColumnCPH_VoteBTN_Sm_VoteBTN class=ScholarshipVoteBTN src="../../Graphics/Pages/Scholarships/v1/vote-button-sm-unchecked.png" alt="Vote for this essay">';

var oldel = document.getElementById("ctl00_ctl00_ctl00_ctl00_PageCPH_CenterColumnCPH_CenterColumnCPH_CenterColumnCPH_VoteBTN_Sm_VoteBTN");
oldel.parentNode.removeChild(oldel);
document.getElementById("div_ctl00_ctl00_ctl00_ctl00_PageCPH_CenterColumnCPH_CenterColumnCPH_CenterColumnCPH_VoteBTN_Sm").innerHTML = newInput + document.getElementById("div_ctl00_ctl00_ctl00_ctl00_PageCPH_CenterColumnCPH_CenterColumnCPH_CenterColumnCPH_VoteBTN_Sm").innerHTML;
