Template.home.events({
  'click [data-action=download]': function(e, t) {
    e.preventDefault();
    var params = document.getElementById('paragraph').innerHTML;
    console.log(params);
    Router.go('pdfview', {
      file: params
    });
  }
});
