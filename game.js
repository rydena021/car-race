var TRACK_SIZE = 12;

$(document).ready(function() {
  loadGrid();
  startCars();
  $("#flip").click(function(){
    $("#panel").slideDown(5000);
  });
});


function loadGrid() {
  for (var i = 0; i < 2; i += 1) {
    var tr = $('<tr class="player' + (i + 1) + '" />').appendTo('#playground');
    for (var j = 0; j < TRACK_SIZE; j += 1) {
      var td = $('<td />').appendTo(tr);
      if (j == 0) {
        td.addClass('active');
      }
    }
  }
}

function startCars() {
  $(document).on('keyup', function(e) {
    if (e.keyCode == 82 /* R */) {
      movePlayer(1);
    } else if (e.keyCode == 66 /* B */) {
      movePlayer(2);
    }
  });
}

function stopCars() {
  $(document).off('keyup');
}

function movePlayer(player) {
  var activeSquare = $('.player' + player + ' .active');
  activeSquare.next().addClass('active');
  activeSquare.removeClass('active');

  checkIfGameFinised();
}


function checkIfGameFinised() {
  var finishedSquare = $('td:last-child.active');
  if (finishedSquare.length > 0) {
    var winner = finishedSquare.parents('tr').hasClass('player1') ? 'player1' : 'player2';
    var loser = finishedSquare.parents('tr').hasClass('player2') ? 'player1' : 'player2';
    alert(loser + ' is dead... LOL !!');
    stopCars();
  };
}
