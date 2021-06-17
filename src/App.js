import './App.css';
import {Component} from "react";

function App() {
  return (
    <div className="App">
        {/*<header className="App-header"> Welcome to Bit-Exchange! </header>*/}

        <p>
            <strong>register</strong><br />
            name <input type="text" /><br />
            <button>register</button>
        </p>

        <p>
            <table className="Balance-table">
                <thead>
                <tr>
                    <th colSpan={2}>balance</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>$</td>
                    <td>1300</td>
                </tr>
                <tr>
                    <td>BTC</td>
                    <td>0.035</td>
                </tr>
                </tbody>
            </table>
        </p>

        <p>
            <strong>load balance</strong><br />
            <label><input type="radio" id="radio_btn_usd" name="load_ccy" checked />USD</label><br />
            <label><input type="radio" id="radio_btn_btc" name="load_ccy" />BTC</label><br />
            amount <input type="text" /><br />
            <button>load</button>
        </p>
    </div>
  );
}

export default App;
