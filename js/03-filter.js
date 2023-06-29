/*
 * Array.prototype.filter()
 * - Поелементно перебирає оригіналний масив
 * - Повертає новий масива (з елементами або пустий )
 * - Додає у масив який повертається елементи які задовільняють умову колбек-функції
 *    - якщо колбек повернув true елемент додається у масив який повертається
 *    - якщо колбек повернув false елемент НЕ додається у масив який повертається
 */

const numbers = [5, 10, 15, 20, 25];

// const filteredNumbers
// console.log(filteredNumbers);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 *Отримуєємо масив усіх онлайн гравців
 */

// const onlinePlayers
// console.table(onlinePlayers);

/*
 * Отримуєємо масив усіх оффлайн гравців
 */

// const offlinePlayers
// console.table(offlinePlayers);

/*
 * Отримуємо список хардкорних гравців з часом більше 250
 */

// const hardcorePlayers
// console.table(hardcorePlayers);
