import logo from './logo.svg';
import './App.css';

import just from './benchmarks/just';
import remeda from './benchmarks/remeda';
import ramda from './benchmarks/ramda';
import tinkoff from './benchmarks/tinkoff';
import {equals} from "remeda";

function App() {
  const a = { x: 1, y: 2 };
  const b = { y: 3, z: 4 };
  const arr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];

  const results = [
    just(a, b, arr),
    remeda(a, b, arr),
    ramda(a, b, arr),
    tinkoff(a, b, arr)
  ];

  const isEverythingEqual = results.every((val, i, arr) => equals(val, arr[0]))
  console.log(isEverythingEqual);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          is everything equal: { isEverythingEqual ? 'yes' : 'no' }
        </a>
      </header>
    </div>
  );
}

export default App;
