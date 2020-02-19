$(document).ready(function(){
    $(".item-icon").find('svg').css("transition", "transform 160ms ease-in-out");
    
    $(".item-icon").hover(function(){
        //Mouse Enter
        $(this).find("svg").css("transform", "translate(10px, -50px) rotate(20deg) scale(1.3)");
    },
    function(){
        //Mouse Leave
        $(this).find("svg").css("transform", "scale(1)");
    });   
});