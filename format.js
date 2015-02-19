$(document).ready(function(){

	$(".projectPic").on("mouseenter", function(){

		var target = this;		
	
		$(target).children(".caption").css("visibility", "hidden");			
		
		$(target).children("img").css("opacity", "0.5");

		$(target).children(".sum").css("visibility", "visible");

	});

	$(".projectPic").on("mouseleave", function(){

		var target = this;	

		$(target).children(".caption").css("visibility", "visible");
	
		$(target).children("img").css("opacity", "0.99");

		$(target).children(".sum").css("visibility", "hidden");

	});

	$("a").on("mouseenter", function(){

		var target = this;		
	
		$(target).children(".sideCaption").css("visibility", "hidden");			
		
		$(target).children("img").css("opacity", "0.5");

		$(target).children(".sideSum").css("visibility", "visible");

	});

	$("a").on("mouseleave", function(){

		var target = this;	

		$(target).children(".sideCaption").css("visibility", "visible");
	
		$(target).children("img").css("opacity", "0.99");

		$(target).children(".sideSum").css("visibility", "hidden");

	});


});
