(function($) {

	jQuery.fn.eslider = function(options) {
	
		options = $.extend({
			
			cycle: true,
			title: "СТРАНИЦА",
			speed: 600
		
		}, options);
		
		var i = 0;
			slider = $(this).find('ul'); 		 				// slider-list
			elms = slider.children().length - 1; 				// length
			counter = $(this).find('#counter');					// counter
			
		function eslide() {
		
			slider.find('li:first-child').addClass("current");	// current		
			
			// counter.text( (i+1) + '/' + (elms+1) );
			
			$(this).addClass("eslider");
			$(this).find('ul').first().addClass("slider");
			
			var caption_block = "<div class='caption-block'><h1>"+ options.title + "</h1><div class='pages'><a href='/' id='left_pg'></a><div id='counter'>"+ (i+1)+'/'+(elms+1)+"</div><a href='/' id='right_pg'></a></div></div>";
			
			
			
			$('ul.slider').before(caption_block);
			
			$(this).find('h1').text( options.title );
		
			$(this).find('a').bind('click',function(){
			
				if (i>=0 && i <=elms) {
		
					if ($(this).attr("id") == "left_pg") {
					
						--i;
						
						if (options.cycle==true) {
						
							if (i<0) {  i = elms; }
							
						}
						else {
							
							if (i<0) {  i = 0; return false; }
						
						}
					
					} else {
					
						i++;
						
						if (options.cycle==true) {
						
							if (i>elms) { i = 0; }
						
						}
						else {
						
							if (i>elms) {  i = elms; return false; }
						
						}
					}
				
				}
				
				slider.find('li.current').fadeOut(options.speed);
				slider.find('li.current').removeClass("current");
				
			
				$(this).parent().find('#counter').html((i+1)+'/'+(elms+1));
					
				
				slider.find('li:eq(' + i + ')').addClass("current");
				$('.current').fadeIn(options.speed);
				
				
				return false;
			
			});
		
		};
		
		return this.each(eslide);
	
	};

})(jQuery);