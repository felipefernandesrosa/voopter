(function() {
  'use strict';

  angular
    .module('voopter')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope,$timeout, webDevTec, toastr) {
    
    var vp = this;
    
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
    
    console.log($scope.cities['0'].airport);
    
    $scope.Add = function() {
        console.log($scope);
        
        var city_origin = JSON.parse($scope.vp.city_origin);
        var city_destination = JSON.parse($scope.vp.city_destination);
        
        console.log('https://voopter.com.br/passagens-aereas-de-'+city_origin.url_name+'/'+city_origin.airport+'/para-'+city_destination.url_name+'/'+city_destination.airport+'#dl%5B%5D=20170414&dr%5B%5D=20170416&na=1&nc=0&ni=0&sn=true&pop=true');
        //$scope.contacts.push({name: $scope.contactname, number: $scope.contactnumber});
    }
    console.log($scope);
    console.log(vp);
    
  }
})();
