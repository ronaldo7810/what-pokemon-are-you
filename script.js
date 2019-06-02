$("#picAnswer").hide();
$("#PicAnswer").hide();
$("#water").hide();
$("#Water").hide();

$("button").click(function() {
 var gen = $("#gen").val();
 var element = $("#element").val();
 

if ( gen >= 3 && element === "fire" ) {
    $("#title").html("you are tepig");
     $("#picAnswer").attr("https://cdn.bulbagarden.net/upload/thumb/5/5b/498Tepig.png/1200px-498Tepig.png");
    $("#answer").html("tepig!");
    $("#picAnswer").show();
    
}else if( gen <= 3 && element === "fire" ) {
    $("#title").html("you are charmander");
     $("#PicAnswer").attr("https://vignette.wikia.nocookie.net/pokemon-revolution/images/4/41/004Charmander_OS_anime_2.png/revision/latest?cb=20150625082016");
    $("#answer").html("charmander!");
    $("#PicAnswer").show();
    
}else if( gen <= 3 && element === "water") {
    $("#title").html("you are squirtle");
    $("#water").attr("https://i.pinimg.com/originals/4f/89/6e/4f896e7aa678b6cb83a9bbc92b118b4d.jpg");
    $("#answer").html("squirtle!");
    $("#water").show();
    
}else if( gen >= 3 && element === "water") {
    $("#title").html("you are oshawatt");
    $("#Water").attr("https://pbs.twimg.com/profile_images/577515849587646465/25BcNNWW_400x400.png");
    $("#answer").html("oshawatt!");
    $("#Water").show();
}





});