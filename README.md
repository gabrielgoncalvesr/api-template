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
