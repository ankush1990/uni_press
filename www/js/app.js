// JavaScript Document
var globalip = "45.79.145.23/Web_Service";
var token = "";
angular.module('ionicApp', ['ionic','ngCordova','ngIOS9UIWebViewPatch','starter.controllers'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  	.state('eventmenu', {
      url: "/event",
      abstract: true,
      templateUrl: "templates/event-menu.html"
    })
    .state('eventmenu.home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    })
    .state('eventmenu.checkin', {
      url: "/check-in",
      views: {
        'menuContent' :{
          templateUrl: "templates/check-in.html",
          controller: "CheckinCtrl"
        }
      }
    })
	.state('eventmenu.tasks', {
      url: "/tasks",
      views: {
        'menuContent' :{
          templateUrl: "templates/tasks.html",
		   controller: "tasksCtrl"
        }
      }
    })
	.state('eventmenu.review', {
      url: "/review",
      views: {
        'menuContent' :{
          templateUrl: "templates/review.html",
		  controller: "reviewCtrl"
        }
      }
    })
	.state('eventmenu.reviewdetail', {
      url: "/reviewdetail",
      views: {
        'menuContent' :{
          templateUrl: "templates/reviewdetail.html",
		  controller: "reviewdetailCtrl"
        }
      }
    })
	.state('eventmenu.reviewdetail1', {
      url: "/reviewdetail1",
      views: {
        'menuContent' :{
          templateUrl: "templates/reviewdetail1.html",
		  controller: "reviewdetail1Ctrl"
        }
      }
    })
	.state('eventmenu.translatedetail1', {
      url: "/translatedetail1",
      views: {
        'menuContent' :{
          templateUrl: "templates/translatedetail1.html",
		  controller: "translatedetail1Ctrl"
        }
      }
    })
	.state('eventmenu.editdetail1', {
      url: "/editdetail1",
      views: {
        'menuContent' :{
          templateUrl: "templates/editdetail1.html",
		  controller: "editdetail1Ctrl"
        }
      }
    })
	.state('eventmenu.translate', {
      url: "/translate",
      views: {
        'menuContent' :{
          templateUrl: "templates/translate.html",
		  controller: "translateCtrl"
        }
      }
    })
	.state('eventmenu.edit', {
      url: "/edit",
      views: {
        'menuContent' :{
          templateUrl: "templates/edit.html",
		  controller: "editCtrl"
        }
      }
    })
	
	$urlRouterProvider.otherwise("/event/check-in");
})
