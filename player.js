var YourTurn = YourTurn || {}
var Players = (function (my) {
  my.players = [];
  my.current_player = null;

  my.add_player = (function () {

    var table_content = function(player_name) {
      return "<tr><th scope='row'>" + player_name + "</th><td id=\"present_" + player_name + "\"></td></tr>";
    };

    var create_player = (function ()  {
      var name_to_object = function(player_name) {
        return { name: player_name, had_a_go: false};
      }

      return function() {
        name = $('#player_name_input').val();
        my.players.push(name_to_object(name));
      }
    }) ();

    var clear_input = function() {
      $('#player_name_input').val('');
    }

    var render_player_on_table = (function() {
      return (function() {
        var table_id = (function() {
          var initial_table_number = 1;

          return function() {
            initial_table_number = ~initial_table_number;
            return "#player_table_" + Math.abs(initial_table_number);
          }
        }) ();

        return function() {
          $(table_id()).append(table_content(name));
        }
      }) ();
    }) ();

    return function(e) {
      create_player();
      clear_input();
      render_player_on_table();
    };
  }) ();

  my.set_current_player = function(player) {
    player.had_a_go = true;
    my.current_player = player
  };

  my.choose_new_player = (function() {
    var _players_still_to_go = function() {
      return my.players.filter(function(player) {
        return !player.had_a_go;
      });
    }

    return function () {
      var players_still_to_go = _players_still_to_go();
      var random_index = Math.floor(Math.random() * players_still_to_go.length)

      var player = players_still_to_go[random_index];
      my.set_current_player(player);
    }
  }) ();

  $(document).ready(function(){

    $('#player_name_input').bind("enterKey", my.add_player);
    $('#player_name_input').keyup(function(e){
      if(e.keyCode == 13)
    {
      $(this).trigger("enterKey");
    }
    });

    var start_next_turn = (function () {
      return function () {
        my.choose_new_player();
        YourTurn.set_your_turn_display();
      }
    }) ();

  $('#start_game_button').on('click', start_next_turn)
  });

  return my
}) (Players || {}, YourTurn);
