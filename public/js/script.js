$(function() {
    $(".change-devoured").on("click", function(event) {
        var id =$(this).data("id");
        var devoured = {
            devoured: true 
        };

        $.ajax("/api/devour/" + id, {
            type: "PUT",
            data: devoured
        }).then(
            function() {
                console.log("put request made with data set to:" + devoured);

                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var burger = {
            burger_name: $("#ca").val().trim(),
            devoured: false
        };

        $.ajax("/api/add", {
            type: "POST",
            data: burger
        }).then(
            function() {
                console.log("created new burger");

                location.reload();
            }
        );
    });
});