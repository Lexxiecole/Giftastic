var apiKey = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dEUGYQ1Cuyu4NeTiq89sfuDLXX8RPA1p&limit=5");
xhr.done(function(data) { console.log("success got data", data); });