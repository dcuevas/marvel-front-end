'use strict';

angular.module('marvelFrontEndApp').controller('MainCharactersCtrl', function ($scope, $log, settings ,characterData) {
        $scope.characters = [];

        _.each(getRandomCharacters(), getCharacter);

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

        function getRandomCharacters() {
            var randomCharacters = [];

            while (randomCharacters.length < settings.numberOfCharactersHome) {
                var index = _.random(0, settings.charactersHome.length-1);
                if (!_.contains(randomCharacters, settings.charactersHome[index])) {
                    randomCharacters.push(settings.charactersHome[index]);
                }
            }

            return randomCharacters;
        }
    }
);

