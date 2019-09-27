$(document).ready(function () {

    // Topics Array variable
    let topics = ["birds", "cats", "owls", "armadillos", "dogs", "hamsters"];

    // for loop through topics array
    for (let i = 0; i < topics.length; i++) {
        let btn = $("<button>")
            .addClass("btn btn-outline-secondary topicButtons")
            .attr("data-topic", topics[i])
            .text(topics[i]);

        $("#buttonDisplay").append(btn);
    };

    // function to display gifs on topic button click
    $(".topicButtons").on("click", function () {

        let q = $(this).attr("data-topic");
        let apiKey = "7NE8PrWddIIhdz9iyhXVesPuVOBrYsNy";
        let queryURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${q}&limit=10`;

        // Ajax call to Giphy api
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (let j = 0; j < response.data.length; j++) {
                // Create an img element with data-values for still and animated gifs
                let gif = $("<img>")
                    .addClass("card-img-top")
                    .attr("src", response.data[j].images.fixed_height_small_still.url)
                    .attr("data-still", response.data[j].images.fixed_height_small_still.url)
                    .attr("data-animated", response.data[j].images.fixed_height_small.url)
                    .attr("data-state", "still");

                // Parse rating and title metadata and add to elements
                let rating = $("<p>").text(`Rating: ${response.data[j].rating}`);
                let title = $("<h5>").text(`Title: ${response.data[j].title}`);

                // Create div for metadata to be displayed as card body text
                let gifInfo = $("<div>")
                    .addClass("card-body");

                // Append metadata to card body
                $(gifInfo).append(title);
                $(gifInfo).append(rating);

                // Create card to display gif and info in
                let gifCard = $("<div>")
                    .addClass("hello card")

                // Append gif and info to card
                $(gifCard).append(gif);
                $(gifCard).append(gifInfo);

                // Prepend card to gif display area on webpage
                $("#gifDisplay").prepend(gifCard);
            };
        }, function (error) {
            // If error is returned, display in console
            console.error(error);
        });

    });

    // function on click - pause and play gif
    $(".hello").on("click", function () {

        console.log("sdsggdrtged");


    });


    // function on click
    // append user input to topics array thereby adding new button



});