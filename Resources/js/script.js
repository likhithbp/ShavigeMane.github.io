$(document).ready(function(){
    
    //sticky navigations
    $('.js--section-features').waypoint(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
   });

   //button scrolls
    $('.js--scroll--plans').click(function(){
        $('html,body').animate({scrollTop: $('.js--plans').offset().top},1000);
        
    });
    
    $('.js--scroll--tomore').click(function(){
        $('html,body').animate({scrollTop: $('.js--section-features').offset().top},1000);
        
    });
    
    $('#jsdel').click(function(){
        $('html,body').animate({scrollTop: $('#delivery').offset().top},1000);
        
    });
    
    $('#jswork').click(function(){
        $('html,body').animate({scrollTop: $('#works').offset().top},1000);
        
    });
    
    $('#jscontact').click(function(){
        $('html,body').animate({scrollTop: $('#contact').offset().top},1000);
        
    });

    
    //animations
    $('.js--wp-1').waypoint(function(direction){
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');
    },{
        offset:'50%'
    });
    
    
     $('.js--wp-2').waypoint(function(direction){
        $('.js--wp-2').addClass('animate__animated animate__flip');
    },{
        offset:'50%'
    });
    
    
     $('.js--wp-3').waypoint(function(direction){
        $('.js--wp-3').addClass('animate__animated animate__bounceIn');
    },{
        offset:'50%'
    });
    
     $('.js--wp-4').waypoint(function(direction){
        $('.js--wp-4').addClass('animate__animated animate__pulse');
    },{
        offset:'50%'
    });
    
});



























