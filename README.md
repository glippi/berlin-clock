[![CircleCI](https://circleci.com/gh/glippi/berlin-clock.svg?style=svg)](https://circleci.com/gh/glippi/berlin-clock)

# :de: :clock1: Berlin Clock
> implementation of the berlin clock kata

This project contains the implementation of the berlin clock kata. It's made of
two main parts: the **clock engine** and the **UI**. Everything is completely
drive by **tests**, with *Jest* and *@testing-library/react*.

## Clock engine

The file `clockEngine.js` contains the code responsible for translating the Date
into the format expected by the Berlin Clock. The file `clockEngine.test.js`
contains the tests - this is the case for leveraging parameterized tests,
running multiple cases in a cleaner, simpler and more readable way.


## UI

The UI is built using React. The components are tested with 
*@testing-library/react*, using `data-testid` attributes on the elements. For
testing some more complicated scenarios, like when we have to determine which
divs should be enlighted or not, we use `snapshots` checking that the output is
what we expected.

## CI/CD

The project is built with *circleci*, where we have two jobs, one for running
the tests and the other for deploy the application, only if the tests are
passing.


## GitHub Pages

Leveraging the capability of *circleci* to run scripts, if all the jobs goes
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
