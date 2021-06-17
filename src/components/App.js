import '../App.css';
import {BalanceTable} from "./BalanceTable";
import {LoadBalanceForm} from "./LoadBalanceForm";
import {Component} from "react";
import {UserManager} from "./UserManager";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            token: "UagsbttHPk",
        }
    }
    changeToken = (token) => {
        console.log("App token changed to < " + token + " >")
        this.setState({
            token: token
        })
    }

    render() {
        return (
            <div className="App">
                {/*<header className="App-header"> Welcome to Bit-Exchange! </header>*/}

                <p>
                    <strong>user</strong><br/>
                    <UserManager token={this.state.token} onTokenChange={this.changeToken}/>
                </p>

                <p>
                    <strong>balance</strong><br/>
                    <BalanceTable token={this.state.token}/>
                </p>

                <p>
                    <strong>load balance</strong><br/>
                    <LoadBalanceForm token={this.state.token}/>
                </p>
            </div>
        );
    }
}

export default App;
