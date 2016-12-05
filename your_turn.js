var Players = Players || {}
var YourTurn = (function(my, Players) {
  my.set_your_turn_display = function () {
    var text = Players.current_player.name + ", it is your turn to play!"
    $('#your_turn_display').html(text)
    window.location.hash = 'your_turn'
  }

  return my;
}) (YourTurn || {}, Players);
