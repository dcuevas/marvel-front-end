"use strict";angular.module("marvelFrontEndApp",["ngResource","ngSanitize","ngRoute"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/mainCharacters.html",controller:"MainCharactersCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("marvelFrontEndApp").constant("settings",{marvelHost:"http://gateway.marvel.com",publicApiKey:"bee9516ebea28f90ee5fa18d8991beeb",resourcePath:"/v1/public/characters",charactersHome:["spider-man","hulk","thor","captain america"]}),angular.module("marvelFrontEndApp").controller("MainCharactersCtrl",["$scope","$log","settings","characterData",function(a,b,c,d){function e(c){var e=d.getCharacterByName(c);e.then(function(b){a.characters.push(b[0])},function(a){b.warn(a)})}a.characters=[],_.each(c.charactersHome,e)}]),angular.module("marvelFrontEndApp").controller("CharacterCtrl",["$scope","characterData","$log",function(a,b,c){var d=b.getCharacters();d.then(function(b){a.characters=b},function(a){c.warn(a)}),a.getCharacterByName=function(){}}]),angular.module("marvelFrontEndApp").factory("characterData",["settings","$resource","$q",function(a,b,c){function d(a,b){var d=c.defer();return a.get(b,function(a){d.resolve(a.data.results)},function(a){d.reject(a)}),d.promise}var e=a.marvelHost+a.resourcePath,f=b(e,{apikey:a.publicApiKey,orderBy:"name",limit:20}),g=b(e+"/:id",{id:"@id",apikey:a.publicApiKey}),h=b(e,{apikey:a.publicApiKey});return{getCharacters:function(){return d(f,{})},getCharacterById:function(a){return d(g,{id:a})},getCharacterByName:function(a){return d(h,{name:a})}}}]);