$(document).ready(function(){
    
    $('#plus-icon').click(function(){
        let aboutDiv = $('#about');
        
        $(aboutDiv).animate({
            height:"800px"
        },1800);
    });
});