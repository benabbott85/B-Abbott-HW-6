$(document).ready(function () {

var temperature = 0;
var date = "todays date";
var humidity = 0;
var wind =0;
var UV= 0;
var cities = ["Denver", "New York City", "Boston", "Park City"];
var apiKey= "97f6b9fea4e913baec982dbbc4d7cf82";
var latCurrent = 0;
var lonCurrent = 0;
var locationCurrent = "everywhere";






    

    

    function displayCityInfo(city) {
        // var city = $("#city-input").val();
        var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + locationCurrent + "&APPID=" + apiKey;

        //AJAX call to be created for city that is being clicked on
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            temperature = ((response.main.temp)- 273.15) * 9/5 + 32;
            temperature = temperature.toFixed(2);
            humidity = response.main.humidity;
            wind = response.wind.speed;
            latCurrent= response.coord.lat;
            console.log("lat " + latCurrent);
            lonCurrent = response.coord.lon;
            $("#tempCurrent").text("Temperature: " + temperature + " F");
            $("#locationCurrent").text(locationCurrent + "(" + date + ")");
            $("#humidCurrent").text("Humidity: " + humidity + " %");
            $("#windCurrent").text("Wind Speed: " + wind + " MPH");
            // $("#UVCurrent").text("UV Index: " + UV);
            var queryURL = "http://api.openweathermap.org/data/2.5/uvi?appid" + apiKey + "&lat= " + latCurrent + "&lon=" + lonCurrent;
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response){
                console.log(response);
                UV=response.value;
                jumboPop;
            })
            

            

            // for (var i = 0; i < recordNumber.length; i++) {
            //     var outputInfo = $("<div>")
            //     outputInfo.text(`${i + 1}
        })


    }



    /// function to clear data from search box

    function renderButtons() {
        $("#buttons-view").empty();

        for (var i = 0; i < cities.length; i++) {

            var a = $("<button>");
            a.addClass("city");
            a.attr("data-name", cities[i]);
            a.text(cities[i]);
            $("#buttons-view").append(a);
        }
    }


    $("#add-city").on("click", function (event) {
        event.preventDefault();
        var city = $("#city-input").val();
        cities.push(city);
        console.log(cities);
        var recordNumber = $("#recordNumber").val();

        renderButtons();
        displayCityInfo(city);
    });
renderButtons();
})

