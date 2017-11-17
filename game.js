var target = Math.floor(Math.random() * 102) + 19;
var bottlePrice = {
    blue: 0,
    green: 0,
    white: 0,
    brown: 0,
}
var score = 0;

$(document).ready(function(){
    bottlePrice.blue = randValue();
    bottlePrice.green = randValue();
    bottlePrice.white = randValue();
    bottlePrice.brown = randValue();
   $("#budget").html(target);

$(".bottle").click(function(){
    $("#bill").append()
});

});



var randValue = function(){
    var x=Math.floor(Math.random() * 12) + 1;
    return x;
}
