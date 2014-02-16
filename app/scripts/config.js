angular.module('marvelFrontEndApp').constant('settings', {
    //marvelHost: 'http://localhost:3000', // Development
    marvelHost: 'http://gateway.marvel.com',
    publicApiKey: 'bee9516ebea28f90ee5fa18d8991beeb',
    resourcePath: '/v1/public/characters',
    charactersHome: ['spider-man', 'hulk', 'thor', 'captain america']
});
