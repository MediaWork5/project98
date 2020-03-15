/*glopal $, alert, console*/

$(function(){

    'use strict';
    
    // the bitton to top
    
    var scrollButton = $("#button-top");
    
    $(window).scroll(function(){
        
        
        if ( $(this).scrollTop() >= 700){
            
            scrollButton.show();
        }
        else{
            
            scrollButton.hide();
            
        }
        
    });
    
    scrollButton.click(function(){
            
        $("html, body").animate({ scrollTop: 0}, 2000);

    });
    
    
    // link of contact us
    
    $('.linkofcontact').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        },1000);
    });
    
});