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

   boardSize: 7,
   numShips: 3,
   shipLength: 3,
   shipsSunk: 0,

   ships: [
      ship1 = { location: [0, 0, 0], hits: ['', '', ''], },
      ship2 = { location: [0, 0, 0], hits: ['', '', ''], },
      ship3 = { location: [0, 0, 0], hits: ['', '', ''], },
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

   generateShipLocations: function () {
      let locations;
      for (let i = 0; i < this.numShips; i++) {
         do {
            locations = this.generateShip();
         } while (this.collision(locations));
         this.ships[i].locations = locations;
      }
      console.log("Ships array: ");
      console.log(this.ships);
   },

   generateShip: function () {
      const direction = Math.floor(Math.random() * 2);
      let row, col;

      if (direction === 1) { // horizontal
         row = Math.floor(Math.random() * this.boardSize);
         col = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
      } else { // vertical
         row = Math.floor(Math.random() * (this.boardSize - this.shipLength + 1));
         col = Math.floor(Math.random() * this.boardSize);
      }

      let newShipLocations = [];
      for (let i = 0; i < this.shipLength; i++) {
         if (direction === 1) {
            newShipLocations.push(row + "" + (col + i));
         } else {
            newShipLocations.push((row + i) + "" + col);
         }
      }
      return newShipLocations;
   },

   collision: function (locations) {
      for (let i = 0; i < this.numShips; i++) {
         const ship = this.ships[i];
         console.log(ship);
         for (var j = 0; j < location.length; j++) {
            if (ship.location.indexOf(locations[j]) >= 0) {
               return true;
            }
         }
      }
      return false;
   }

};

const controller = {
   gusses: 0,

   processGuess: function (guess) {
      const location = parseGuess(guess);
      if (location) {
         this.gusses++;
         const hit = model.fire(location);
         if (hit && model.shipsSunk === model.numShips) {
            view.displayMessage("You have sunk all the ships in " + this.gusses + " shots.");
         }
      }
   }
};

function parseGuess(guess) {
   const alphabet = ["A", "B", "C", "D", "E", "F", "G"];

   if (guess === null || guess.length !== 2) {
      alert("You entered the wrong coordinates");
   } else {
      firstChar = guess.charAt(0); //извлекаем со строки первый символ
      const row = alphabet.indexOf(firstChar);
      const column = guess.charAt(1);

      if (isNaN(row) || isNaN(column)) {
         alert("You entered the wrong coordinates");
      } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
         alert("You entered the wrong coordinates");
      } else {
         return row + column;
      }
   }
   return null;
};

function init() {
   let fireButton = document.getElementById("fireButton");
   fireButton.onclick = handleFireButton;
   // поработаем с Enter
   let guessInput = document.getElementById('guessInput');
   guessInput.onkeypress = handleKeyPress;

   model.generateShipLocations();
   debugger;
   alert("Welcome to the page of the game \"Sea Battle\"!\n" +
      "The game is created only for playing against bots.\n" +
      "The location of the ships is random.\n" +
      "Good luck!");
};

function handleFireButton() {
   let guessInput = document.getElementById('guessInput');
   const guess = guessInput.value;
   controller.processGuess(guess);

   guessInput.value = "";
};

function handleKeyPress(e) {
   const fireButton = document.getElementById("fireButton");
   if (e.keyCode === 13) {
      fireButton.click();
      return false;
   }
};

window.onload = init;