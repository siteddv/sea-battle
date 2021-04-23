const view = {

   displayMessage: function (msg) {
      const messageArea = document.querySelector("#messageArea");
      messageArea.innerHTML = msg;
   },

   displayHit: function (location) {
      const cell = document.querySelector(location);
      cell.setAttribute("class", "hit");
   },

   displayMiss: function (location) {
      const cell = document.querySelector(location);
      cell.setAttribute("class", "miss");
   },

}



const model = {
   boardSize: 7,   // Размер игрового поля
   numShips: 3,    // Количество кораблей в игре
   shipLength: 3,  // Длина корабля в клетках
   shipsSunk: 0,   // Количество потопленных кораблей

   ships: [
      ship1 = { location: ['10', '20', '30'], hits: ['', '', ''], },
      ship2 = { location: ['32', '33', '34'], hits: ['', '', ''], },
      ship3 = { location: ['63', '64', '65'], hits: ['', '', ''], },
   ],

   fire: function (coordinates) {
      for (const shipName in this.ships) {
         const ship = this.ships[shipName],
         const location = ship[location];
         const index = location.indexOf(coordinates);
         if (index >= 0) {
            ship.hits[index] = ' hit';
            return true;
         } else {
            false;
         }
      }
   }
}