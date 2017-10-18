(function($){
	$('.carousel').carousel({
		interval: 2000
	});
	$(".carousel-control-prev").click(function(){
		$("#carouselExampleIndicators").carousel('prev');
	});
	$(".carousel-control-next").click(function(){		
		$("#carouselExampleIndicators").carousel('next');
	});			
})(jQuery);