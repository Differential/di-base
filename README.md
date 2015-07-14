# Di-Base settings branch

Showcasing the use of settings.json files for production, staging, and development

#### Files Added
 - package.json - This file sets the name of the app for npm and writes a script to link your settings files to those set in modulus
 - settings.json - A JSON file with all the staging / dev keys
 - settings.prod.json - A JSON file with all the production keys

#### Running app locally
`npm start`

#### Deploying
 - For staging - `npm run staging`
 - For production - `npm run production`
