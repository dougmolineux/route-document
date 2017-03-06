# route-document
Inspects express app and documents routes in Readme.md

# install
- Copy "route-document" folder into your project directory (location of app.js)
- Add this to the top of app.js

`const routeDocumenter = require("./route-document").document;`

- After you define your routes (usually `require("./routes")(app);`), add this

`routeDocumenter(app);`

- Check your README.md and remove the lines above
