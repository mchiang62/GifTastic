// buttons need to be displayed
// when button is clicked, gifs need to be shown from the giphy API site.
// Need to display 10 GIFS
// when gifs are clicked, they need to move
// need to show rating

var topics = ["The Good Place", "Friends", "Criminal Minds", "The Office", "New Girl", "Psych"]


// var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=bZm4DU6X76X0Tjqh0bfKJZSvq5yVwj3R&limit=10");
// xhr.done(function(response) { console.log("success got data", response); });


function displayGifs() {
    event.preventDefault()

    $("#gif-list").empty()
    var tvShow = $(this).attr('data-name');

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + tvShow + "&api_key=bZm4DU6X76X0Tjqh0bfKJZSvq5yVwj3R&limit=10";

    console.log(queryURL);
    console.log("hi"+tvShow)

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {


            console.log(response)

            var results = response.data;

            for (var i = 0; i < results.length; i++) {

                var div = $("<div class='tv'>");

                var p = $("<p>").text("Rating: " + results[i].rating);

                var images = $("<img>");

                images.attr("src", results[i].images.fixed_height_still.url);
                images.attr("still", results[i].images.fixed_height_still.url);
                images.attr("animate", results[i].images.fixed_height.url);
                images.attr("state", "still");
                images.attr("class", "movement");
                

                div.append(p);
                div.append(images);

                $("#gif-list").prepend(div)



            }

        }


    )
}



// displayGifs()




function displayButtons() {
    // make sure to empty - it will prevent the buttons from adding again
    $("#button-list").empty();

    for (var i = 0; i < topics.length; i++) {

        var button = $("<button>");
        button.addClass("tvShow");
        button.attr("data-name", topics[i]);
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


$("#gif-list").on("click", '.movement', function() {
  

    var state = $(this).attr("state");
    

    if (state === "still") {
      $(this).attr("src", $(this).attr("animate"));
      $(this).attr("state", "animate");
    } else {
      $(this).attr("src", $(this).attr("still"));
      $(this).attr("state", "still");
    }
  });




$(document).on('click', '.tvShow', displayGifs);


displayButtons()