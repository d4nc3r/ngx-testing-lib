# Creating

Create the workspace

```bash
ng new libraries-testing --no-create-application 
```

In that folder, create the library

```bash
ng g library auth-lib --skip-tests
```

Remove Karma Stuff

```bash
npm remove karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter @types/jasmine jasmine-core
```

Remove the test object from `angular.json`

Remove `karma.conf` and `test.ts` files.




Install deps

```bash
npm install -D jest jest-preset-angular @types/jest
```


Add `setup-jest.ts` in root of project:

```typescript
import 'jest-preset-angular/setup-jest';
```

Add `jest.config.js` in root.

```js
// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
};
```
