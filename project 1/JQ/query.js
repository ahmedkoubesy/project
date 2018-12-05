/*global $ ,mixitup*/
// JavaScript Documentrrr
$(function () {
	
	$(".header,.nav,.bxslider div .img").height($(window).height() - 225);
	$(".bxslider").each(function () { $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2 - 80);
					               });
								   

    
    
//var typed3 = new Typed('#azx', {
//    strings: ['thank you for watching','thank you for watching'],
//    typeSpeed: 100,
//    backSpeed: 100,
//    smartBackspace: true, // this is a default
//    loop: true
//  });
//    
    
    var z = "thank you for visited my site",
        i = 0,
        k = document.getElementById("azx"),
        inter = setInterval(function () {k.innerHTML += z[i]; i++;
                                    if (z.length === k.innerText.length) {clearInterval(inter); } }, 100);

    $(".link ul li").on("click", function () {
	    $(this).addClass("active").siblings().removeClass("active");
    });
	
	$(".link li a ").click(function () {
		$("html,body").animate({
		    scrollTop: $($(this).attr("href")).offset().top - 10
        }, 1000);
    });	
		
    mixitup('.galary');
	
	$(".list-we li").click(function () {
		
		$(this).addClass("active").siblings().removeClass("active");
    });
			
	$("html").niceScroll({
		cursorwidth: "10",
		cursorminheight: "100",
		cursorborder: "none",
		cursorborderradius: "none",
		scrollspeed: "100",
        mousescrollstep: "40",
		railpadding: { top: 5, right: 7, left: 5, bottom: 5 }
    });
					
});