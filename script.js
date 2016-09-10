/************ Angular Moxdules *************/
var app = angular.module("groceryApp", ['ngRoute']);

app.config(function($routeProvider){

    $routeProvider
        .when('/', {
            templateUrl: "landing.html",
            controller: "mainCtrl"
        })
        .when('/about', {
            templateUrl: "about.html",
            controller: "mainCtrl"
        })
        .when('/contact', {
            templateUrl: "contact.html",
            controller: "mainCtrl"
        })
        .otherwise({
            redirectTo: '/'
        });
});

app.controller('mainCtrl', function($scope){
    $scope.items = [];
    var empty_cart = $(".empty-cart");
    var item_name = $('.item-name');
    var item_qty = $('.item-qty');


    $scope.addItem = function() {
        var item_obj = {};
        item_obj.name = item_name.val();
        item_obj.qty = item_qty.val();

        empty_cart.hide();

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

        $scope.items.push(item_obj);
        localStorage.shoppingCart = $scope.items;
        $('#item-name').html = localStorage.shoppingCart;


        item_name.attr("placeholder", "What Else Do You Need?");
        $('.item-name, .item-qty').css({
                "background-color": "white"})
            .removeClass('input-field').val('').first().focus();
    };

    $scope.removeItem = function(item) {
        var index = $scope.items.indexOf(item);
        $scope.items.splice(index,1);

        if ($scope.items == "") {
            empty_cart.show();
        }
    };

});
