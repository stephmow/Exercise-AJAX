"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div

    $.get('/fortune', (evt) => {
        $('#fortune-text').html(evt)   // note - using '.html' will ensure the text shows up with correct styles.  using '.text' will just return plaintext
    });
};

$('#get-fortune-button').on('click', showFortune);



// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};

    // TODO: request weather with that URL and show the forecast in #weather-info

    $.get(url, formData, (res) => {
        $('#weather-info').html(res.temp)
    });
};

$("#weather-form").on('submit', showWeather);


// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)

    const inputs = {
        'melon_type': $("#melon-type-field").val(),  // val method gets values of form elements
        'qty': $("#qty-field").val()
    };

    $.post("/order-melons.json", inputs, (res) => {

        if (res.code === "OK") {
            $("#order-status").html(res.msg);
        }
        else {
            $("#order-status").addClass("order-error");
            $("#order-status").html(res.msg);
        };
 
    });
};

$("#order-form").on('submit', orderMelons);
