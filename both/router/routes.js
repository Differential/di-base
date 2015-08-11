Router.route('/', {
  name: 'home'
});

Router.route('/items', {
  name: 'items'
});

Router.route('/items/add', {
  name: 'addItem'
});

Router.route('/items/:id', {
  name: 'viewItem'
});

Router.route('/items/:id/edit', {
  name: 'editItem'
});

Router.route('/download/:file', function() {
  var data =  this.params.file;
  var self = this;



  var k = installWK.bin.download(function() {
    var r = installWK.bin.localPath();
    process.env.WK_HTML = installWK.bin.localPath();
    //console.log(process.env.WK_HTML = installWK.bin.localPath());


    // create some http buffers for your pdf file
    var headers = {
      'Content-type': 'application/pdf',
      'Content-Disposition': "attachment; filename=test.pdf"
    };

    // Add the headers to the response buffer
    self.response.writeHead(200, headers);

      //dev: http://localhost:3000/html/header.html

      //dev: http://localhost:3000/html/footer.html

      var q = wkhtmltopdf(data, {
        headerHtml: 'http://localhost:3000/html/header.html',
        footerHtml: 'http://localhost:3000/html/footer.html',
        // toc: true,
        loadErrorHandling: 'ignore',
        printMediaType: true,
        footerSpacing: 12,
        headerSpacing: 20,
        // marginTop: '0mm',
        // marginBottom: '0mm',
        marginLeft: '20mm',
        marginRight: '20mm',
        encoding: 'utf-8',
      }).pipe(self.response);

  });
}, {
  name: "pdfview",
  where: 'server'
});
