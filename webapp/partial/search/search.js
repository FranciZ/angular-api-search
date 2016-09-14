angular.module('webapp').controller('SearchCtrl',function(
  $scope,
  searchService,
  locales
){

  var timer;

  $scope.locales = locales.data;

  $scope.filterLocale = function(locale){

    var regexp = new RegExp($scope.searchTermLocal, 'gi');

    var langSearch = locale.language.search(regexp);
    var descSearch = locale.description.search(regexp);

    if(langSearch >= 0 || descSearch >= 0){
      return true;
    }else{
      return false;
    }

  };

  $scope.onSearchKeyUp = function(){


    if(timer) clearTimeout(timer);

    timer = setTimeout(function(){

      searchService.search($scope.searchTerm)
        .then(function(res){

          $scope.locales = res.data;

        });

    }, 100);


  };

});