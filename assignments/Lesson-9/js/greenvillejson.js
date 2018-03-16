var requestURL= 'https://api.wunderground.com/api/c4def7abb39dd9ac/forecast/conditions/q/TX/Greenville.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();


request.onload = function() {
    var greenville = JSON.parse(request.responseText);
    console.log(greenville);
 
    document.getElementById('precipitation').innerHTML = greenville.current_observation.precip_today_in;
    document.getElementById('windSpeed').innerHTML = greenville.current_observation.wind_mph;
    document.getElementById('windChill').innerHTML = greenville.current_observation.windchill_f;
    document.getElementById('currentTemp').innerHTML = greenville.current_observation.temp_f;
    document.getElementById('currentWeather').innerHTML = greenville.current_observation.weather;
    document.getElementById('textDescription').innerHTML = greenville.forecast.txt_forecast.forecastday["0"].fcttext;
    document.getElementById('currentWeather').innerHTML = greenville.current_observation.weather;
    document.getElementById('high').innerHTML = greenville.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low').innerHTML = greenville.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
    
    var icon = greenville.current_observation.icon_url;
    icon = icon.replace("http","https");
    document.getElementById('currentPic').src = icon;
    
    
}
  
    
    
    
    var tenDayURL = 'https://api.wunderground.com/api/c4def7abb39dd9ac/forecast10day/q/TX/Greenville.json';
var tenDayRequest = new XMLHttpRequest();
tenDayRequest.open('GET', tenDayURL, true);
tenDayRequest.send();

tenDayRequest.onload = function() {
    
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