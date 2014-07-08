var load = function () {
  FB.ui(
    {
      method: 'share',
      href: 'https://wordcup.herokuapp.com',
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
