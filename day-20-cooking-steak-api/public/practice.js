var $table = $('#steak-table');

var promise = $.ajax({
  url: 'http://tiy.ericsowell.com/api/cookingsteaks'
});

  promise.done(function(data){

  for (var i=0; i<data.levels.length; i++){

    var html =
      '<tr>' +
        '<td>' + data.levels[i].name + '</td>' +
        '<td>' + data.levels[i].description + '</td>' +
        '<td>' + '<img src="' + data.levels[i].imageUrl + '"/>' + '</td>' +
      '</tr>';

      $table.append(html);
 }

});
