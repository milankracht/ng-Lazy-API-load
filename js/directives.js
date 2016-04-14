myAppModule
	.directive('scroll', scroll)
	.directive('scrollBottom', scrollBottom);

	function scroll($window) {
		
		var directive = {
		    link: function(scope, element, attr) {

		    	var viewport = angular.element($window),
		    		contentHeight,
					viewportHeight = viewport.height(),
					scrollTop;

				viewport.bind('scroll', function() {
					
					scrollTop = this.pageYOffset;
					contentHeight = $('.wrapper').height();
					
					if ((scrollTop + viewportHeight - 120) == contentHeight) {
						//scroll to the bottom has been detected
						
						//load new movies
						scope.getMovies();

						//enlarge content with temporary filler block offset scroll from bottom
						scope.filler = true;
					}
				});
		    }
		};
		return directive;
	}

	//'load more' button press
	function scrollBottom($window) {
		
		var directive = {
		    link: function(scope, element, attr) {

				element.bind('click', function() {

					//content is scrolled to bottom
					var viewport = angular.element($window),
			    		contentHeight = $('.wrapper').height(),
						viewportHeight = viewport.height();
					
					angular.element($window).scrollTop(contentHeight - viewportHeight + 120);
				});
		    }
		};
		return directive;
	}