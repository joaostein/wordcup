(function (w, d) {

  w.loadClickListeners = function () {
    var associacaoVagalume = {
      fb: d.querySelectorAll('.associacao-vagalume .facebook a')[0]
    }

    associacaoVagalume.fb.addEventListener('click', function (e) {
      loadFbDialogue();
      e.preventDefault();
    });
  };

  var loadFbDialogue = function () {
    FB.ui(
      {
        method: 'share',
        href: 'wordcup.herokuapp.com',
        picture: 'http://themeritshop.org/assets/fb-share-image.jpg',
        caption: 'Caption example',
        description: 'Description example'
      },
      function(response) {
        if (response && !response.error_code) {
          alert('Posting completed.');
        } else {
          alert('Error while posting.');
        }
      }
    );
  };

}(window, document));