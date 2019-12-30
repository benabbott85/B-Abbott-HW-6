




$(document).ready(function () {
    var cities = ["Denver", "New York City", "Boston", "Park City"]

    function displayCityInfo(city) {
        var city = $("#city-input").val();
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&APPID=97f6b9fea4e913baec982dbbc4d7cf82";

        //AJAX call to be created for city that is being clicked on
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            $("#city-view").text(JSON.stringify(response));
            console.log(response);

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
        var city = $("#city-input").val().trim();
        cities.push(city);
        console.log(cities);
        var recordNumber = $("#recordNumber").val();

        renderButtons();
        displayCityInfo(city);
    });

})