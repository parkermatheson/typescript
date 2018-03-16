// function printAddress(street: string, streetTwo?: string, state = 'AZ') {
//   console.log(street);
//   console.log(streetTwo);
// }

// printAddress('123 Any St');
// printAddress('123 Any St');

function lineupCard(team: string, ...players: string[]) {
  console.log('Team: ' + team);
  for (let player of players) {
    console.log(player);
  }
}

lineupCard('Astros', 'Altuve', 'Correra', 'Bregman');