
// buttons need to be displayed
// when button is clicked, gifs need to be shown with rating from giphy.
// when gifs are clicked, they need to move
// need to show rating

var topics = ["The Good Place", "Friends", "Criminal Minds", "Nikita", "New Girl", "Psych", "Revenge"
]

function displayButtons () {
    // make sure to empty - it will prevent the buttons from adding again
    $("#button-list").empty();

    for(var i = 0; i < topics.length; i++) {

        var button = $("<button>");
        button.addClass("tvShow");
        button.attr("data", topics[i]);
        button.text(topics[i]);
        $("#button-list").append(button)



    }


}


displayButtons ()




// input button
// prevent submit button from trying to submit
// create variable to grab text from input box
// queryURL
// need to make sure when button is clicked, buttons are added to HTML

$("#search-item").on("click", function(event) {
    event.preventDefault();


});