# React Homework 1: Basics

## Getting Started

1. Fork this repo
2. Install dependencies: `npm install`
3. Run the tests: `npm test`
4. Run it locally: `npm start`

Your goal here is to make all the tests pass. Currently, they are all pending.
So, you'll need to un-pend them by replacing `xit` with `it` for each test, as
you work through each test.

The tests are organized in tiers. You are advised to work through these tiers in
order (`tests/tier-1` followed by `tests/tier-2.js`, etc).

You may want to run a single test in isolation (it keeps the test output a lot
cleaner). To do so, replace `it` with `it.only`. Just remember to change it back
to `it` after you're done with that test. 😉

The React Dev Tools are your friend!

- [Chrome Install](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Firefox Install](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

As you work through the tests, you are encouraged to view the running React
application in your browser, especially because you will be able to leverage the
awesome power of the React Dev Tools.

By default, Parcel will open up the React application at
[localhost:1234](localhost:1234)

## Learning Goals

- rendering from props
- useState
  - setting state
  - rendering from state
- Passing props to child components
- Writing a helper function
- useFetch
  - Get data from a provided server
- Handling events
  - Click, Change, Submit
- Lists and Keys
- Fragments
