// function printAddress(street: string, streetTwo?: string, state = 'AZ') {
//   console.log(street);
//   console.log(streetTwo);
// }
// printAddress('123 Any St');
// printAddress('123 Any St');
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');
//# sourceMappingURL=016_function_args.js.map