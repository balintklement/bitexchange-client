import '../App.css';
import {BalanceTable} from "./BalanceTable";
import {LoadBalanceForm} from "./LoadBalanceForm";

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
            <strong>balance</strong><br />
            <BalanceTable />
        </p>

        <p>
            <strong>load balance</strong><br />
            <LoadBalanceForm />
        </p>
    </div>
  );
}

export default App;
