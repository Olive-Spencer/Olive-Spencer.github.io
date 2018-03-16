var requestURL= 'https://byui-cit230.github.io/weather/data/towndata.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();

request.onload = function() {
    var startPage = JSON.parse(request.responseText);
    console.log(startPage);
    
    document.getElementById('franklin').innerHTML = startPage.towns["0"].name;
    document.getElementById('mottoF').innerHTML = startPage.towns["0"].motto;
    document.getElementById('foundedF').innerHTML = startPage.towns["0"].yearFounded;
    document.getElementById('popF').innerHTML = startPage.towns["0"].currentPopulation;
    document.getElementById('rainF').innerHTML = startPage.towns["0"].averageRainfall;
    document.getElementById('event1F').innerHTML = startPage.towns["0"].events["0"];
    document.getElementById('event2F').innerHTML = startPage.towns["0"].events["1"];
    document.getElementById('event3F').innerHTML = startPage.towns["0"].events["2"];
    
    document.getElementById('greenville').innerHTML = startPage.towns["1"].name;
    document.getElementById('mottoG').innerHTML = startPage.towns["1"].motto;
    document.getElementById('foundedG').innerHTML = startPage.towns["1"].yearFounded;
    document.getElementById('popG').innerHTML = startPage.towns["1"].currentPopulation;
    document.getElementById('rainG').innerHTML = startPage.towns["1"].averageRainfall;
    document.getElementById('event1G').innerHTML = startPage.towns["1"].events["0"];
    document.getElementById('event2G').innerHTML = startPage.towns["1"].events["1"];
    document.getElementById('event3G').innerHTML = startPage.towns["1"].events["2"];
    document.getElementById('event4G').innerHTML = startPage.towns["1"].events["3"];
    
    document.getElementById('springfield').innerHTML = startPage.towns["3"].name;
    document.getElementById('mottoS').innerHTML = startPage.towns["3"].motto;
    document.getElementById('foundedS').innerHTML = startPage.towns["3"].yearFounded;
    document.getElementById('popS').innerHTML = startPage.towns["3"].currentPopulation;
    document.getElementById('rainS').innerHTML = startPage.towns["3"].averageRainfall;
    document.getElementById('event1S').innerHTML = startPage.towns["3"].events["0"];
    document.getElementById('event2S').innerHTML = startPage.towns["3"].events["1"];
    document.getElementById('event3S').innerHTML = startPage.towns["3"].events["2"];
    
    
    
}