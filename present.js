var Present = (function(my) {
  var present_content = function (present_name) {
    return "<div class='draggable glyphicon glyphicon-gift'>" + present_name + "</div>"
  }

  var create_and_render_present = function () {
    var present = $('#present_name_input').val();
    var present_element = $(present_content(present));

    present_element.draggable();

    $('[data-current-player=true]').append(present_element);
  };

  var clear_input = function() {
    $('#present_name_input').val('');
  }

  var hide_modal = function() {
    $('#presentModal').modal('hide');
  }

  my.add_present = (function () {
    return function() {
      create_and_render_present();
      clear_input();
      hide_modal();

      debugger;

      $('[data-current-player]').removeAttr('data-current-player')
    }
  });

  my.show_modal = function (e) {
    $('#presentModal').modal('show');
  }

  return my;
}) (Present || {});
