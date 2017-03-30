(function() {
  'use strict';

  angular
    .module('voopter')
    .controller('MainController', MainController)

  /** @ngInject */
  function MainController($scope, $filter, $timeout, webDevTec, toastr) {
    
    var vm = this;
    
    console.log(vm);
    
    $scope.cities = [
        {
            "name" : "Rio De Janeiro",
            "uf": "RJ",
            "url_name" : "rio-de-janeiro",
            "airport" : "GIG"
            
        },
        {
            "name" : "São Paulo",
            "uf": "SP",
            "url_name" : "sao-paulo",
            "airport"  : "GRU"
        },
        {
            "name" : "Porto Alegre - POA",
            "uf": "SP",
            "url_name" : "porto-alegre",
            "airport"  : "POA"
        }
    ];
   
    $scope.dateOptions = {
        formatYear: 'yy',
        maxDate: new Date(2020, 5, 22),
        minDate: new Date(),
        startingDay: 1
    };
    
    $scope.format = 'yyyy/MM/dd';
    
    $scope.open1 = function(par) {
        console.log(par);
        $scope.popup1.opened = true;
    };
  
    $scope.popup1 = {
        opened: false
    };
   
    $scope.open2 = function() {
        $scope.popup2.opened = true;
    };
  
    $scope.popup2 = {
        opened: false
    };
     
    $scope.Add = function() {
        
        var city_origin = JSON.parse($scope.vp.city_origin);
        var city_destination = JSON.parse($scope.vp.city_destination);
        var date_leave = $filter('date')($scope.vp.date_leave,"yyyyMMdd");
        var date_return = $filter('date')($scope.vp.date_return,"yyyyMMdd");
        
        console.log('https://voopter.com.br/passagens-aereas-de-'+city_origin.url_name+'/'+city_origin.airport+'/para-'+city_destination.url_name+'/'+city_destination.airport+'#dl%5B%5D='+date_leave+'&dr%5B%5D='+date_return+'&na=1&nc=0&ni=0&sn=true&pop=true');
        
    }
    
  }
    
    

})();
