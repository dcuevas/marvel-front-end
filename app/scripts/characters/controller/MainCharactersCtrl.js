'use strict';

angular.module('marvelFrontEndApp').controller('MainCharactersCtrl', function ($scope, $log, settings ,characterData) {
        $scope.characters = [];

        _.each(settings.charactersHome, getCharacter);

        function getCharacter(name) {
            var characterPromise = characterData.getCharacterByName(name);

            characterPromise.then(
                function(data) {
                    $scope.characters.push(data[0]);
                },
                function(response) {
                    $log.warn(response);
                }
            );
        }
    }
);

