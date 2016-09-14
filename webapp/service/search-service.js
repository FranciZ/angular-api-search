angular.module('webapp').factory('searchService',function($http) {

    var searchService = {
        search:function(term){

            return $http.get('http://localhost:3011/search?term='+term);

        }
    };

    return searchService;
});