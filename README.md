# **Kata**  -- Social Networking

This code implements the core domain logic of a social networking app as described in this [kata](kata.md).
It models the users, their timelines, and their relationship to other users. Currently there is no user interface, data persistance, or API. Rather, the code was written to act as a foundation for those features. 

## Installation

Installation requires [node.js](https://nodejs.org/) v10+ to run.
You can use **yarn** or **npm** to install dependencies and run the tests. 

I will be using yarn in the examples here:
```sh
git clone https://github.com/crsayen/social-networking
cd social-networking
yarn
```

## Testing

Quick-to-execute unit tests can be run continually as changes are made:
```sh
yarn test:watch
```

To run all test suites:
```sh
yarn test
```

## Building
There isn't much to build (*yet*!)
However, after a little more work, this should do the trick:
```sh
yarn build
```
