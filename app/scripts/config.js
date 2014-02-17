angular.module('marvelFrontEndApp').constant('settings', {
    //marvelHost: 'http://localhost:3000', // Development
    marvelHost: 'http://gateway.marvel.com',
    publicApiKey: '<public key>',
    resourcePath: '/v1/public/characters',
    numberOfCharactersHome: 6,
    charactersHome: ['spider-man', 'thing','wasp', 'wolverine', 'thor', 'captain america', 'hulk', 'iron man', 'daredevil', 'silver surfer', 'thundra', 'storm']
});
