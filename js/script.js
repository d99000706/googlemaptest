
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    // get the street and city tring input values
    street = $("#street").val();
    city = $("#city").val();
    
    // build the img string
    imgStr = "https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" +
             street + ", " + city;
    
    $body.append('<img class="bgimg" src=' + imgStr + '>');    
    
    console.log("imgStr = " + imgStr);

    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);

// loadData();
