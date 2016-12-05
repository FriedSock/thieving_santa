var PlayerSelect = (function(my, Players) {
  my.hide = function() {
    $('#myModal').modal('hide');
  }

  my.show = function() {
    $('#myModal').modal('show');
  }

  return my;
}) (PlayerSelect || {}, Players);
