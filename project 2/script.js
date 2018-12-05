// JavaScript Document

$(function(){
	
	$("#home").click(function(){
		
		$("html,body").animate({scrollTop:$(".head").offset().top},800)});
		
	$(".fixeds").height($(window).height());
	$(".fixeds").width($(window).width())
	$("#set").click(function(){
		$(".fixeds").fadeIn(1000)})
	$(".fixeds").click(function(){
		$(this).fadeOut(1000)})
	
	});
	
	
	
	/*css("display","block")*/