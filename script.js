/************ Angular Modules *************/
var app = angular.module("groceryApp", ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: "landing.html",
            controller: "landingController"
        })
        .when('/about', {
            templateUrl: "about.html",
            controller: "aboutController"
        })
        .when('/contact', {
            templateUrl: "contact.html",
            controller: "landingController"
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('landingController', function($scope){

    $scope.items = [];

    $scope.addItem = function() {
        var item_name = $('.item-name');
        var item_qty = $('.item-qty');

        if (item_name.val() == "" || item_qty.val() == "") {

            if (item_name.val() == ""){
                item_name.css("background-color", "red").addClass("input-field").attr("placeholder", "Please enter a" +
                    " valid item");
            }
            else if (item_qty.val() == "" || item_qty.val() == isNaN){
                item_qty.css("background-color", "red").addClass("input-field");
            }

            return;
        }

        var item_obj = {};
        item_obj.name = item_name.val();
        item_obj.qty = item_qty.val();
        $scope.items.push(item_obj);

        item_name.attr("placeholder", "What Else Do You Need?");
        $('.item-name, .item-qty').css({
                "background-color": "white"})
            .removeClass('input-field').val('').first().focus();
    };

    $scope.removeItem = function(item) {
        var index = $scope.items.indexOf(item);
        $scope.items.splice(index,1);
    };

});

