angular.module('marvelFrontEndApp').constant('settings', {
    //marvelHost: 'http://localhost:3000', // Development
    marvelHost: 'http://gateway.marvel.com',
    publicApiKey: 'bee9516ebea28f90ee5fa18d8991beeb',
    resourcePath: '/v1/public/characters',
    numberOfCharactersHome: 6,
    charactersHome: ['spider-man', 'thing','wasp', 'wolverine', 'thor', 'captain america', 'hulk', 'iron man', 'daredevil', 'silver surfer', 'thundra', 'storm']
});
