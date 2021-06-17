import {Component} from "react";

export class BalanceTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            balance_usd: 1300,
            balance_btc: 0.025,
        }
    }

    componentDidMount() {
        console.log("component did mount")
        const headers = {"customer-token": "UagsbttHPk"};
        fetch('http://localhost:8080/customers/balance', {headers})
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                this.setState({balance_usd: data.usd})
                this.setState({balance_btc: data.btc})
            })
            .catch(error => {
                console.error("There was an error!", error)
            })
    }

    render() {
        return (
            <table className="Balance-table">
                <tbody>
                <tr>
                    <td>$</td>
                    <td>{this.state.balance_usd}</td>
                </tr>
                <tr>
                    <td>BTC</td>
                    <td>{this.state.balance_btc}</td>
                </tr>
                </tbody>
            </table>
        );
    }
}
