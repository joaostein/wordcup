var load = function () {
  FB.ui(
    {
      method: 'share',
      href: 'https://wordcup.herokuapp.com',
      message: 'test message oh yeah'
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
