var rows = 24;
var cols = 24;

function initialize() {
  createTable();
}

function createTable() {
  var gridContainer = document.getElementById("gridContainer");
  if (!gridContainer) {
    console.error("Problem: no div for the grid table");
  }
  var table = document.createElement("table");

  for (var i = 0; i < rows; i++) {
    var tr = document.createElement("tr");
    for (var j = 0; j < cols; j++) {
      var cell = document.createElement("td");
      cell.setAttribute("id", i + "_" + j);
      cell.setAttribute("class", "dead");
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
  gridContainer.appendChild(table);
}

window.onload =initialize;
