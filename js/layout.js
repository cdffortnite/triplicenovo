(function () {
  "use strict";

  function injectPartial(targetId, url) {
    var target = document.getElementById(targetId);
    if (!target) {
      return;
    }
    fetch(url)
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Falha ao carregar " + url);
        }
        return response.text();
      })
      .then(function (html) {
        target.innerHTML = html;
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  document.addEventListener("DOMContentLoaded", function () {
    injectPartial("site-header", "header.html");
    injectPartial("site-footer", "footer.html");
  });
})();
