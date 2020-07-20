document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('grabIdToken');
    checkPageButton.addEventListener('click', function() {
        var idToken = document.createElement("textarea");
        idToken.value = localStorage.getItem('id_token')
        idToken.select();
        document.execCommand('copy')
        document.body.removeChild(idToken);
    }, false);
  }, false);