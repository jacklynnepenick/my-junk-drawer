// ==UserScript==
// @name        Scrap.tf Price Getter
// @namespace   C:\Users\Jack\Documents\Greasemonkey Scripts
// @description Gets prices from backpack.tf on hover
// @include     http://scrap.tf/*
// @include     http://backpack.tf/api/IGetPrices/v2/?format=jsonp&currency=metal
// @version     1
// @grant       GM_xmlhttpRequest
// @grant       GM_getValue
// @grant       GM_setValue
// ==/UserScript==

//Cache data on that website
/*if(document.URL == "http://backpack.tf/api/IGetPrices/v2/?format=jsonp&currency=metal")
{
    GM_setValue('tf2prices', document.innerHTML);
    GM_setValue('tf2pricegettime', Date.now().toString());
    alert("success");
}*/

var bptf = null;
GM_xmlhttpRequest({
  method: "GET",
  url: "http://backpack.tf/pricelist/spreadsheet", 
  onload: function(response) {
    if (!response.responseXML) {
      bptf = new DOMParser()
        .parseFromString(response.responseText, "text/xml");
    }
    else
    {
        bptf = response.responseXML;
    }
    doer();
  }
});
function alerk()
{
    alert('hello');
    return "";
}


function doer()
{
    var container = document.getElementsByClassName('rev-items-container');
    for(var i = 0; i < container.length; i++)
    {
        var item = container[i].getElementsByTagName('div');
        for(var j = 0; j < item.length; j++)
        {
            if(item[j].getAttribute('data-id') != "")
            {
                item[j].setAttribute('data-content', 
                    item[j].getAttribute('data-content') + 'Price: ' + getPrice(item[j].getAttribute('data-title')));
            }
        }
    }
}

function getPrice(item)
{
    var v = bptf.getElementById('searchBox');
    alert(item);
    alert(v);
    v = item;
    alert(item);
    return bptf.getElementById('searchResults').getElementsByTagName('small')[0].getElementsByClassName('label q6').innerHTML;   
}