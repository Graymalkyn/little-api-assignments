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


      promise.done(function(data){
        $theList.empty();


        var templateFunc = _.template('<li><%= fullName %></li>');





        for (var i=0; i<data.items.length; i++){
          var html = templateFunc({fullName: data.items[i].full_name});
          $theList.append(html)
        }
      })

    }

  context.start = start;

  $theInput.on('keyup', keyUpHappened);

})(window.RepoSearch);
