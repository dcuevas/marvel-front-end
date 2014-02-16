'use strict';

angular.module('marvelFrontEndApp').factory('characterData', function (settings, $resource, $q) {
    var uri = settings.marvelHost + settings.resourcePath;
    var resourceCharacters = $resource(uri, {apikey: settings.publicApiKey, orderBy: 'name', limit: 20});
    var resourceCharacterById = $resource(uri + '/:id', { id: '@id', apikey: settings.publicApiKey });
    var resourceCharacter = $resource(uri, {apikey: settings.publicApiKey });


    return {
        getCharacters: function() {
            return executeDeferredGet(resourceCharacters,{});
        },

        getCharacterById: function(id) {
            return executeDeferredGet(resourceCharacterById, {id:id});
        },

        getCharacterByName: function(name) {
            return executeDeferredGet(resourceCharacter, {name:name});
        }

    };

    function executeDeferredGet(resource, params) {
        var deferred = $q.defer();

        resource.get(params,
            function (responseData) {
                deferred.resolve(responseData.data.results);
            },

            function (response) {
                deferred.reject(response);
            }

        );

        return deferred.promise;
    }

});
