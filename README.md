# starting-reactjs

A small React exercise: one page with an author biography and a shopping cart counter, written as a class component and as a hook version.

**Status: archived.** Learning exercise from 2020, last activity 2020-11-07. Not maintained.

## What it shows

- Props: [`Biography.js`](src/components/Biography.js) receives the author name from [`App.js`](src/App.js).
- State and the lifecycle methods of a class component, with the order they run in logged to the console: [`ShoppingCart.js`](src/components/ShoppingCart.js).
- The same counter as a function component with `useState`: [`ShoppingCartHook.js`](src/components/ShoppingCartHook.js). [`Books.js`](src/components/Books.js) renders a hard-coded list of works by the author. Both are commented out in `App.js`.

## Stack

From [`package.json`](package.json): React 16.12, `react-scripts` 3.4.0 (Create React App), React Testing Library.

## Run it

```bash
yarn install
yarn start
```

These commands were not run when this README was written.

## Known issues

- `ShoppingCart.js` uses `componentWillMount`, `componentWillReceiveProps` and `componentWillUpdate`, lifecycle methods that React has since deprecated.
- The dependencies are from 2020 (`react-scripts` 3.4.0) and `yarn audit` reports a large number of advisories for them. Do not deploy this as is.
- The only test is the default Create React App one.

## License

No license file in the repository.
