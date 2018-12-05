// JavaScript Documentrrr
$(function(){
	
	$(".header,.nav,.bxslider div .img").height($(window).height());
	$(".bxslider").each(function(){
		                            $(this).css("paddingTop",($(window).height() - $(".bxslider li").height())/ 2-80 )
					               });
								   
								   
	$(window).resize(function(){$(".header,.nav,.bxslider img").height($(window).height());
	$(".bxslider").each(function(){
		                            $(this).css("paddingTop",($(window).height() - $(".bxslider li").height())/ 2 )
					               });
	});

    $(window).scroll(function(){
        if(pageYOffset == $(".navs").offset().top)
            {
                $(".navs").css({backgroundColor:"rgba(0,0,0,0.4)"});
            }
        else if(pageYOffset > $(".navs").offset().top){
                $(".navs").css({backgroundColor:"rgba(0,0,0,1)",
                               position:"fixed",
                               top:0,
                               display:"block",
                               width:$(window).width()});
        }
    })


    $(".link ul li").on("click" , function(){
	$(this).addClass("active").siblings().removeClass("active");});
	
	
	
	
	$('.bxslider').bxSlider({auto:true,
							 pager:false});
	
	
	
	
	
	
	$(".link li a ").click(function(){
		$("html,body").animate({
		scrollTop:$($(this).attr("href")).offset().top -10},1000)});
		
		
		
		
	
		
		
		
	 mixitup('.x')
	
		
		
		
	$(".list-we li").click(function(){
		
		$(this).addClass("active").siblings().removeClass("active")
		});	
		
		
		
		
		
		
	$("html").niceScroll({
		cursorwidth:"10",
		cursorminheight:"100",
		cursorborder:"none",
		cursorborderradius:"none",
		scrollspeed: "100", 
        mousescrollstep:"40",
		railpadding:{ top: 5, right: 7, left: 5, bottom: 5 }
		})	
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
					
		});