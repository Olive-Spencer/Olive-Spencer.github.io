var requestURL= 'https://olive-spencer.github.io/assignments/Final-Project/data/service.json';
var request= new XMLHttpRequest();
request.open('GET', requestURL, true);
request.send();


request.onload = function() {
    var price = JSON.parse(request.responseText);
    console.log(price);
 
    document.getElementById('tune').innerHTML = price.tuneup;
    document.getElementById('flat').innerHTML = price.flatRepair;
    document.getElementById('chain').innerHTML = price.chainRepair;
    document.getElementById('break').innerHTML = price.breakRepair;
    document.getElementById('shock').innerHTML = price.shockRepair;
    document.getElementById('other').innerHTML = price.otherService;
}