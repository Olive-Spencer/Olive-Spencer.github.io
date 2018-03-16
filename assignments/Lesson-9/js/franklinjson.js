var requestURL= 'https://api.wunderground.com/api/c4def7abb39dd9ac/forecast/conditions/q/MN/Franklin.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();
var tenDayURL = 'https://api.wunderground.com/api/c4def7abb39dd9ac/forecast10day/q/MN/Franklin.json';
var tenDayRequest = new XMLHttpRequest();
tenDayRequest.open('GET', tenDayURL, true);
tenDayRequest.send();

request.onload = function() {
    var franklin = JSON.parse(request.responseText);
    console.log(franklin);
 
    document.getElementById('precipitation').innerHTML = franklin.current_observation.precip_today_in;
    document.getElementById('windSpeed').innerHTML = franklin.current_observation.wind_mph;
    document.getElementById('windChill').innerHTML = franklin.current_observation.windchill_f;
    document.getElementById('currentTemp').innerHTML = franklin.current_observation.temp_f;
    document.getElementById('currentWeather').innerHTML = franklin.current_observation.weather;
    document.getElementById('textDescription').innerHTML = franklin.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('currentWeather').innerHTML = franklin.current_observation.weather;
    document.getElementById('high').innerHTML = franklin.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low').innerHTML = franklin.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    document.getElementById('currentPic').src = franklin.current_observation.icon_url;
    document.getElementById('currentIcon').innerHTML = franklin.current_observation.icon;
    
        var tenDay = JSON.parse(tenDayRequest.responseText);
    console.log(tenDay);
    document.getElementById('0').innerHTML = tenDay.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    document.getElementById('1').innerHTML = tenDay.forecast.simpleforecast.forecastday[1].high.fahrenheit; 
    document.getElementById('2').innerHTML = tenDay.forecast.simpleforecast.forecastday[2].high.fahrenheit; 
    document.getElementById('3').innerHTML = tenDay.forecast.simpleforecast.forecastday[3].high.fahrenheit; 
    document.getElementById('4').innerHTML = tenDay.forecast.simpleforecast.forecastday[4].high.fahrenheit; 
    document.getElementById('5').innerHTML = tenDay.forecast.simpleforecast.forecastday[5].high.fahrenheit; 
    document.getElementById('6').innerHTML = tenDay.forecast.simpleforecast.forecastday[6].high.fahrenheit; 
    document.getElementById('7').innerHTML = tenDay.forecast.simpleforecast.forecastday[7].high.fahrenheit; 
    document.getElementById('8').innerHTML = tenDay.forecast.simpleforecast.forecastday[8].high.fahrenheit; 
    document.getElementById('9').innerHTML = tenDay.forecast.simpleforecast.forecastday[9].high.fahrenheit; 
    
    
    
    
    

 
}
