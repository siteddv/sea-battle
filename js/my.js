// let location1 = Math.floor(Math.random() * 5);
// let location2 = location1 + 1;
// let location3 = location2 + 1;

// let guess;
// let hits = 0;
// let guesses = 0;

// let isSunk = false;

// while (!isSunk) {
//    guess = prompt("Ты готов выстрелить? (введи цифру 0-6):");
//    if (guess < 0 || guess > 6) {
//       alert("Повтори ввод. Введи цифру от 0 до 6");
//    } else {
//       ++guesses;
//       if (guess == location1 || guess == location2 || guess == location3) {
//          ++hits;
//          alert("Попал :)");
//          if (hits === 3) {
//             isSunk = true;
//             alert("Ты победил в игре!");
//          }
//       } else {
//          alert("Мимо :(");
//       }
//    }
// }
// let status = "Ты выстрелил " + guesses +
//    " раз для того, чтобы попасть по кораблю.\n" +
//    "Это показывает уровень твоей точности, как " + (3 / guesses);
// alert(status);