(function (d) {
  twitterAnchors = d.querySelectorAll('.twitter a');

  for (var i = 0; i < twitterAnchors.length; i++) {
    twitterAnchors[i].addEventListener('click', function (e) {
      var url = this.getAttribute('href');
      openUrl(url);
      e.preventDefault();
    });
  }

  var openUrl = function (url) {
    var width = 600;
    var height = 400;
    var leftPosition = (window.screen.width / 2) - ((width / 2) + 10);
    var topPosition = (window.screen.height / 2) - ((height / 2) + 50);
    var windowFeatures = "status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + leftPosition + ",top=" + topPosition + ",screenX=" + leftPosition + ",screenY=" + topPosition + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no";
    window.open(url, 'sharer', windowFeatures);
  };
}(document));