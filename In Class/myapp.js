angular.module('myApp', ['ui.router'])
.config(function($stateProvider){
    $stateProvider
    .state('home', {
        url: '/',
        templateUrl: 'home.html'
    })
    .state('about' , {
        url: '/about',
        template: '<h1>About Me</h1>'
    })
})