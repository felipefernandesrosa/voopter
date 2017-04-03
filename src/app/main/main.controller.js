(function() {
    'use strict';

    angular
      .module('voopter')
      .controller('MainController', MainController)

    /** @ngInject */
    function MainController($scope, $filter, $window) {
      
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
       
       /**
        * Calendar box
        **/
        $scope.dateOptions = {
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };
        
        $scope.open1 = function() {
            $scope.popup1.opened = true;
        };
      
        $scope.popup1 = { opened: false};
       
        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };
      
        $scope.popup2 = { opened: false };
        
        /**
         * Radio box
         **/
        
        $scope.radioModel = 'one-way-flight';
        
        $scope.Add = function() {
            
            var city_origin = JSON.parse($scope.vp.city_origin);
            var city_destination = JSON.parse($scope.vp.city_destination);
            
            if($scope.vp.date_leave != undefined){
              var date_leave = '#dl%5B%5D='+$filter('date')($scope.vp.date_leave,"yyyyMMdd");  
            }else{
              var date_leave = '';
            }
            
            if($scope.vp.date_return != undefined){
              var date_return = '&dr%5B%5D='+$filter('date')($scope.vp.date_return,"yyyyMMdd");  
            }else{
              var date_return = '';
            }
            
            $window.open('https://voopter.com.br/passagens-aereas-de-'+city_origin.url_name+'/'+city_origin.airport+'/para-'+city_destination.url_name+'/'+city_destination.airport+date_leave+date_return+'&na=1&nc=0&ni=0&sn=true&pop=true','_blank');
            
        }
    }
    
    

})();
