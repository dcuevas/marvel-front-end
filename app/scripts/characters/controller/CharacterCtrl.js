'use strict';

angular.module('marvelFrontEndApp').controller('CharacterCtrl', function ($scope, characterData, $log) {
        var characters = characterData.getCharacters();

        characters.then(
            function(data) {
                $scope.characters = data;
            },
            function(response) {
                $log.warn(response);
            }
        );


        $scope.getCharacterByName = function(name) {

        }

    }
);
