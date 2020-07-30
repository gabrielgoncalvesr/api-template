# fazae-back

##### Configuration
1. download project with `git clone git@github.com:gabrielgoncalvesr/fazae-back.git`.
2. download dependencies with `npm install`.
3. migrate database with migrate `npm run migrate`.
3. run project in developments mode with `npm run dev`.

##### Branch
The project in `master` is the production application, all merges to this branch, after tests, will be deployed automatically to production.
The project in `develop` is the development application, only this branch can be merged to master, all features must be merged to this branch.

##### Tests
All features must be created multiples tests to validate all possibilities of logic, exception and success returns. 
To test application, all tests must be created in `/tests/unit` or `/tests/integration`. To execute test run `npm test`. If tests not passed, you must be fixing your error to merge the feature.

##### Documentation
All routes in the application and all scenarios must be documented, with all possible error messages and multiple execution scenarios.
For documentation, you must create files in `/apidoc/config`. All documentation files, can be found in `/apidoc/documentation`, but you should not change these files, they are generate automatically, you can open web page with `https://API_URL/documentation`. After creating the documentation, you can use the command `npm run documentation` to generate the new website files.
The API documentation can be found [here](https://fazae.herokuapp.com/documentation). The documentation was built with [apiDoc](https://github.com/apidoc/apidoc), all examples can be found [here](https://apidocjs.com/).

##### Scripts
- `npm start` to start application.
- `npm run dev` to start application in development mode.
- `npm test` to run all tests.
- `npm run test:coverage` to run all tests with coverage status.
- `npm run test:unit` to run only unit tests.
- `npm run test:integration` to run only integration tests.
- `npm run documentation` to run documentation generator. 
- `npm run migrate` to run database migration. 
