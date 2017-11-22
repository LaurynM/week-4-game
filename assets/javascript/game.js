var target = Math.floor(Math.random() * 102) + 19; //Pick a random target value between 19 and 120
var bottlePrice = {
    blue: 0,
    green: 0,
    white: 0,
    brown: 0,
}
var total = 0;
$("#total").html(total);

var win = 0;
$("#win").html(win);

var lose = 0;
$("#lose").html(lose);

var tips = 0;
$("#tips").html(tips);

$("#next").hide();

$(document).ready(function(){
    bottlePrice.blue = randValue();
    bottlePrice.green = randValue();
    bottlePrice.white = randValue();
    bottlePrice.brown = randValue();
    $("#budget").html(target);

    $(".bottle").click(function(){ //every time you click on a bottle...
        var choice = $(this).attr('id'); //store what bottle you chose...
        var cost = bottlePrice[choice]; //store how much that bottle costs, per shot

        $("#bill").append('<p>One shot of ' + choice + ' liquor for $' + cost + '.</p>'); //add a line to the bill
        
        total += cost; //add the cost of the new choice to the total
        $("#total").html(total); //display the new total

        if (total == target){ //Winning scenario
            win++; //add one win
            $("#win").html(win);
            tips += 100; //add $100 tip
            $("#tips").html(tips);
            $("#win-lose").html("<p class='alert alert-success' role='alert'>Thanks, I'll take it! Have a tip for making the perfect drink.</p>");
            //hide the bottles to stop game play
            $(".bottle").hide();
            $("#next").show();//allow player to go to next customer
            // add a coin sound?
        }else if (total > target){ //Losing scenario
            lose++; //add one loss
            $("#lose").html(lose);
            tips -= total; //remove total cost of drink from tips
            $("#tips").html(tips);
            $("#win-lose").html("<p class='alert alert-danger' role='alert'>That's way too expensive! I won't pay it!</p>");
            //hide the bottles to stop game play
            $(".bottle").hide();
            $("#next").show();//allow player to go to next customer
            // add a vacuum/sucking/wind sound?
        }
    }); //end of bottle click function
}); //end of document.ready



var randValue = function(){
    var x=Math.floor(Math.random() * 12) + 1;
    return x;
}

var newCustomer = function(){
    //reset bottle prices
    bottlePrice.blue = randValue();
    bottlePrice.green = randValue();
    bottlePrice.white = randValue();
    bottlePrice.brown = randValue();
    //reset target
    target = Math.floor(Math.random() * 102) + 19;
    $("#budget").html(target);
    //reset the running total
    total = 0;
    $("#total").html(total);
    //clear the bill
    $("#bill").empty();
    //remove win-lose message
    $("#win-lose").empty();
    //hide the next customer button
    $("#next").hide();
    //show the bottles
    $(".bottle").show();
}

$("#next").click(newCustomer);
