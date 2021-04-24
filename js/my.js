const view = {

   displayMessage: function (msg) {
      const messageArea = document.getElementById("messageArea");
      messageArea.innerHTML = msg;
   },

   displayHit: function (location) {
      const cell = document.getElementById(location);
      cell.setAttribute("class", "hit");
   },

   displayMiss: function (location) {
      const cell = document.getElementById(location);
      cell.setAttribute("class", "miss");
   },

};


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

   fire: function (coordinatesToFire) {
      for (const shipName in this.ships) {
         const ship = this.ships[shipName];
         const shipLocation = ship.location;
         const indexToFire = shipLocation.indexOf(coordinatesToFire);

         if (indexToFire >= 0) {

            ship.hits[indexToFire] = 'hit';
            view.displayHit(coordinatesToFire);
            view.displayMessage("HIT!!!");
            if (this.isSunk(ship)) {
               view.displayMessage("You sank my battleship!");
               ++this.shipsSunk;
            }
            return true;
         }
      }
      alert(coordinatesToFire);
      view.displayMiss(coordinatesToFire);
      view.displayMessage("You missed!");
      return false;
   },

   isSunk: function (ship) {
      for (const hit in ship.hits) {
         if (hit !== "hit") {
            return false;
         }
      }
      return true;
   },
};

model.fire('23');
console.log('23');
model.fire('32');
console.log('32');
model.fire('25');
console.log('25');
model.fire('65');
console.log('65');
model.fire('43');
console.log('43');
