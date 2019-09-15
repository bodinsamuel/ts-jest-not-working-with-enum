# ts-jest-not-working-with-enum

git clone https://github.com/bodinsamuel/ts-jest-not-working-with-enum.git

yarn install

yarn test


```bash 
λ yarn test
yarn run v1.17.3
$ jest
 FAIL  src/__tests__/plop.test.ts
  ● Test suite failed to run

    Cannot find module '../types/tet' from 'plop.test.ts'

    However, Jest was able to find:
    	'../types/tet.d.ts'

    You might want to include a file extension in your import, or update your 'moduleFileExtensions', which is currently ['ts', 'tsx', 'js', 'jsx', 'json', 'node'].

    See https://jestjs.io/docs/en/configuration#modulefileextensions-array-string

    > 1 | import { Biome } from '../types/tet';
        | ^
      2 |
      3 | describe('hello', () => {
      4 |   it('should load', () => {

      at Resolver.resolveModule (node_modules/jest-resolve/build/index.js:259:17)
      at Object.<anonymous> (src/__tests__/plop.test.ts:1:1)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.438s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

