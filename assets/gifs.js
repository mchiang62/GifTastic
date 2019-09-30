// buttons need to be displayed
// when button is clicked, gifs need to be shown from the giphy API site.
// Need to display 10 GIFS
// 
// when gifs are clicked, they need to move
// need to show rating

var topics = ["The Good Place", "Friends", "Criminal Minds", "Nikita", "New Girl", "Psych", "Revenge"]


// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=bZm4DU6X76X0Tjqh0bfKJZSvq5yVwj3R&limit=10");
// xhr.done(function(response) { console.log("success got data", response); });


function displayGifs() {

    var tvShow = $(this).attr('data-name');

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShow + "&api_key=bZm4DU6X76X0Tjqh0bfKJZSvq5yVwj3R&limit=10";

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

            console.log(response)

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var rating = response.rating;

                var p = $("<p>").text("Rating: " + rating);

                var images = $("<img>");


            }





        }



    )
}



displayGifs()





function displayButtons() {
    // make sure to empty - it will prevent the buttons from adding again
    $("#button-list").empty();

    for (var i = 0; i < topics.length; i++) {

        var button = $("<button>");
        button.addClass("tvShow");
        button.attr("data", topics[i]);
        button.text(topics[i]);
        $("#button-list").append(button)

    }

}


// input button
// prevent submit button from trying to submit
// create variable to grab text from input box
// queryURL
// need to make sure when button is clicked, buttons are added to HTML

$("#search-item").on("click", function (event) {
    event.preventDefault();

    var search = $("#search-input").val().trim();

    topics.push(search);

    displayButtons()


});


$(document).on('click', '.tvShow', displayGifs);


displayButtons()