const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: true },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Array.prototype.every()
 * - Поелементно перебирає оригіналний масив
 * - Повертає true якщо усі елементи масива задовільняють умову
 */

// const isAllOnline = players.every(player => player.online);
// console.log('isAllOnline: ', isAllOnline);

/*
 * Array.prototype.some()
 * - Поелементно перебирає оригіналний масив
 * - Повертає true якщо хоча б один елемент масиву задовільняє умову
 */
// const isAnyOnline = players.every(player => player.online);
// console.log('isAnyOnline: ', isAnyOnline);

// const anyHardcorePlayers = players.some(player => player.timePlayed > 400);
// console.log('anyHardcorePlayers: ', anyHardcorePlayers);
