# Di-Base

### Pdf-Export Branch
Using di-base with wkhtmltopdf-installer (https://github.com/pofider/node-wkhtmltopdf-installer) and wkhtmltopdf (https://github.com/devongovett/node-wkhtmltopdf)

### Why use a pdf
 - Ability to control the styling a pdf with a header and a footer

### Added packages

####wkthmltopdf-installer
 - `meteor create wkhtmltopdf-installer`
 - `Npm.depends({'wkhtmltopdf-installer': '0.1.9'});`

####wkthmltopdf
- `meteor create Pdf_exporter`
- `Npm.depends({'wkhtmltopdf': '0.1.5'});`
- Then remove from packages and then pull out the wkhtmltopdf folder from node-modules folder and put in server folder to allow it to pass through modulus
- .npm folder gets removed in modulus and packages get remove through Modulus's demeteorizer


### Files changed
 - both/router/routes.js
 - packages/wkhtmltopdf-installer
 - server/Pdf_exporter
 - public/html/header.html
 - public/html/footer.html
