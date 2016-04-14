myAppModule.service('lazyLoadAppService', lazyLoadAppService);

	lazyLoadAppService.$inject = ['$http'];
	
	function lazyLoadAppService($http) {

		//load movies on search key 'star'
		this.getMovies = function (page) {
			return $http({
				url: 'http://www.omdbapi.com/?s=star&r=json&page=' + page,
				method: 'GET'
			});
		}
	}
