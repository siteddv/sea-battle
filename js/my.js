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