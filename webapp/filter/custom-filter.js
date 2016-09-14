angular.module('webapp').filter('customFilter', function() {
    return function(input,arg) {
        return 'output';
    };
});