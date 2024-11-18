"use strict";

//import Trip class
$(document).ready(() => {

    //click function
    $("#add_trip").click(() => {
        const trip = new Trip(
            $("#destination").val(),
            $("#km").val(),
            $("#litres").val()
        );

        //validate trip
        if (trip.isValid) {
            trips.push(trip);
            $("#trip_list").val(trips.toString());

            $("#destination").val("");
            $("#km").val("");
            $("#litres").val("");

            $("#destination").focus();
        } else {
            alert("Please complete all fields.\nKilometers and litres must be numeric and greater than zero.");
            $("#destination").select();
        }
    });

    $("#destination").focus();
});
