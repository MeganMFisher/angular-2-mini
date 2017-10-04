angular.module('myApp').service('productsSrvc', function($http) {

    this.getShoeData = () => {
        return $http.get('https://practiceapi.devmountain.com/products?category=shoes')
    
    }

    this.getSockData = () => {
        return $http.get('https://practiceapi.devmountain.com/products?category=socks')
    }


});