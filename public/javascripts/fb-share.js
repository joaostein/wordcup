(function (w, d) {
  var URL = 'http://wordcup.herokuapp.com';
  var PICTURE = 'http://themeritshop.org/assets/fb-share-image.jpg';
  var CAPTION = 'Agora você pode ajudar a seleção brasileira a ganhar o mundial e ao mesmo tempo, ajudar milhares de brasileiros a ter mais um motivo para comemorar!';

  var associacaoVagalume = {
    params: {
      description: 'Vai Brasil! Eu já fiz a minha promessa para a gente ganhar o hexa. Clique aqui e faça a sua promessa também.',
      name: 'Se o Brasil ganhar vou fazer uma doação para a Vaga Lume'
    },

    fb: d.querySelectorAll('.associacao-vagalume .facebook a')[0]
  };

  var graac = {
    params: {
      description: 'Agora vai! Acabei de prometer que se o Brasil for hexa, vou ajudar a GRAAC a ganhar também. Clique aqui e faça a sua promessa também.',
      name: 'Se o Brasil ganhar vou fazer uma doação para a GRAAC (Grupo de Apoio ao Adolescente e à Criança com Câncer)'
    },

    fb: d.querySelectorAll('.graac .facebook a')[0]
  };

  var sosMataAtlantica = {
    params: {
      description: 'Prometi e vou cumprir. Se o Brasil for hexa vou ajudar a SOS Mata Atlântica. Clique aqui e faça a sua promessa também.',
      name: 'Se o Brasil ganhar vou fazer uma doação para a SOS Mata Atlântica'
    },

    fb: d.querySelectorAll('.sos-mata-atlantica .facebook a')[0]
  };

  w.initListeners = function () {
    listenToClick(associacaoVagalume.fb, associacaoVagalume.params);
    listenToClick(graac.fb, graac.params);
    listenToClick(sosMataAtlantica.fb, sosMataAtlantica.params);
  };

  var listenToClick = function (fb, params) {
    fb.addEventListener('click', function (e) {
      loadFbDialogue(params);
      e.preventDefault();
    });
  };

  var loadFbDialogue = function (params) {
    var finalParams = {
      method: 'feed',
      href: URL,
      picture: PICTURE,
      caption: CAPTION,
      description: params.description,
      name: params.name
    };

    FB.ui(finalParams, cb);
  };

  var cb = function(response) {
    if (response && !response.error_code) {
      alert('Posting completed.');
    } else {
      alert('Error while posting.');
    }
  };

}(window, document));