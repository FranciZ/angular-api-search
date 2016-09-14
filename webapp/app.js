angular.module('webapp', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('webapp').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('search', {
        url: '/search',
        templateUrl: 'partial/search/search.html',
        controller:'SearchCtrl',
        resolve:{
            locales:function(searchService){

                return searchService.search('');

            }
        }
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/search');

});

angular.module('webapp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
