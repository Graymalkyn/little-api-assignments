'use strict';
if (this.RepoSearch === undefined) this.RepoSearch = {};

(function(context) {
  var $theList = $('#full-name');
  var $theInput = $('#text-entry');



  function keyUpHappened(evt){
    if(evt.keyCode === 13) {
      start();
    }
  }

  function start() {


    var promise = $.ajax({
      url: 'https://api.github.com/search/repositories?q=' + $theInput.val()

    });


    promise.done(function(context){
      $theList.empty();

      for (var i=0; i<context.items.length; i++)
        $theList.append('<li>' + context.items[i].full_name)
    })



  }

  context.start = start;

  $theInput.on('keyup', keyUpHappened);

})(window.RepoSearch);
