document.getElementById('link').addEventListener('click', function () {
    var href = this.dataset.link;
    window.location = href;
  });