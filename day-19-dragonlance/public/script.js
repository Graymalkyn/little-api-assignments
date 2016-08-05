var $name = $('#name');
var $race = $('#race');
var $description = $('#description');


  var promise = $.ajax({
    url: 'http://localhost:5003/api/dragonlance'
  });

  promise.done(function(data) {

    console.log('data', data)

    for (var i = 0; i < data.characters.length; i++){
      $name.append('<li>' + data.characters[i].name + '</li>')
    }
    console.log('name', $name)

    for (var i = 0; i < data.characters.length; i++){
      $race.append('<li>' + data.characters[i].race + '</li>')
    }
    console.log('race', $race)

    for (var i = 0; i < data.characters.length; i++){
      $description.append('<li>' + data.characters[i].description + '</li>')
    }
    console.log('desc', $description)

  });
