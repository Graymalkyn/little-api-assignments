var $name = $('#name');
var $desc = $('#description');
var $image = $('#imageUrl');

var promise = $.ajax({
  url: 'http://tiy.ericsowell.com/api/cookingsteaks'
})

promise.done(function(data){

  for (var i=0; i<data.levels.length; i++){
    $name.append('<li>' + data.levels[i].name + '</li>')
  }

  for (var i=0; i<data.levels.length; i++){
    $desc.append('<li>' + data.levels[i].description + '</li>')
  }

  for (var i=0; i<data.levels.length; i++){
    $image.append('<li>' + '<img src="' + data.levels[i].imageUrl + '"/>' + '</li>')
  }


})
