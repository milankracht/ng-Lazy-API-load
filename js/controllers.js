myAppModule.controller('lazyLoadAppController', lazyLoadAppController);

	lazyLoadAppController.$inject = ['$scope', '$timeout', 'lazyLoadAppService'];
	
	function lazyLoadAppController($scope, $timeout, lazyLoadAppService) {

		$scope.page = 1;
		$scope.hideLoader = true;
		$scope.filler = false;

		$scope.getMovies = function () {

			$scope.hideLoader = false;

			lazyLoadAppService.getMovies($scope.page)
				.success(function (result) {
					
					//emulate thotthling
					$timeout(function() {
						
						if ($scope.page < 2) {
							$scope.results = result.Search;
						} else {
							$scope.results = $scope.results.concat(result.Search);
						}
						
						$scope.counter = $scope.page * 10;
						$scope.page++;
						$scope.hideLoader = true;
						$scope.filler = false;
						
						//check if the entire viewport is already filled till the bottom
						$scope.viewportFilled();

						console.log('update with timeout fired')
					}, 1000);
					
				})
				.error(function (err, status) {
					$scope.error = err;
				});
		}

		$scope.viewportFilled = function () {

			var contentHeight = $('.wrapper').height();
		    var viewportHeight = $(window).height();

		    if (contentHeight < viewportHeight) {
		    	//viewport is not entirely filled, load another set of movies
		    	$scope.getMovies();
		    }
		}

		$scope.getMovies();
		

	}