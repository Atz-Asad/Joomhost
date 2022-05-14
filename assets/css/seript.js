$(document).ready(function(){

    $('.menu-bar').click(function(){
		$('.header-main-right').slideDown(1000);
		$('.menu-bar').hide();
        $('.menu-close').show();
	
    });

    $('.menu-close').click(function(){       
		$('.menu-bar').show();
		$('.menu-close').hide();
		$('.header-main-right').slideUp(1000);
	  
    });
    
    
   
    
   
   

});