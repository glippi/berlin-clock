[![CircleCI](https://circleci.com/gh/glippi/berlin-clock.svg?style=svg)](https://circleci.com/gh/glippi/berlin-clock)

<div align="center">
  <h1>Berlin Clock</h1>
  <img
    alt="berlin-clock"
    src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Berlin-Uhr-1650-1705.gif"
    />

  > implementation of the berlin clock kata
</div>


Simple implementation of the berlin clock kata. It's made of
two main parts: the **clock engine** and the **UI**. Everything is completely
driven by **tests**, with `Jest` and `@testing-library/react`.

## Clock engine

The file `clockEngine.js` contains the code responsible for translating the `Date`
into the format expected by the Berlin Clock. This was a good case for
leveraging parameterized tests (see `clockEngine.test.js`).

The function `startClock` is responsible for starting the timer, and expects a
Date. For this reason, in the tests `startClock.test.js` we used mocked date in
order to have full control of the expected output of the function unders test.

## UI

The UI is built using React. The components are tested with 
`@testing-library/react`, using `data-testid` attributes on the elements. For
testing some more complicated scenarios, like when we have to determine which
divs should be enlighted or not, we use `snapshots` checking that the output is
what we expected.

## CI/CD

The project is built with `circleci`, where we have two jobs, one for running
the tests and the other for deploy the application, only if the tests are
passing.


## GitHub Pages

Leveraging the capability of `circleci` to run scripts, if all the jobs goes
well, we then launch the `deploy.sh` script, responsible for the creation of the
branch `gh-pages` and we shipped an optimized build of the app on github pages.


### The Kata

For more info about the kata, like rules etc., please check:
  
  * [Agile Katas](http://agilekatas.co.uk/katas/BerlinClock-Kata)
  * [CodeWars](https://www.codewars.com/kata/berlin-clock)

#### Local Development

As the app was created with *create-react-app*, you have all the scripts that
are shipped by default with cra, so:

  * install packages: `yarn install`
  * run tests: `yarn test`
  * run local server: `yarn start`
  * build for production: `yarn build`
