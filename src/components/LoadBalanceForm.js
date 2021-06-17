import {Component} from "react";

export class LoadBalanceForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCcy: "BTC",
            amount: "0",
        }
    }

    handleOptionChange = changeEvent => {
        this.setState({
            selectedCcy: changeEvent.target.value
        })
    }
    handleAmountChange = changeEvent => {
        this.setState({
            amount: changeEvent.target.value
        })
    }
    loadBalance = formSubmitEvent => {
        formSubmitEvent.preventDefault()

        console.log("You load: ", this.state.amount, this.state.selectedCcy)
        const headers = {"customer-token": this.props.token, 'Content-Type': 'application/json'};
        const requestBody = JSON.stringify({
            amount: this.state.amount,
            currency: this.state.selectedCcy,
        })
        fetch('http://localhost:8080/customers/balance', {method: "POST", headers: headers, body: requestBody})
            .then(res => res.json())
            .then((data) => {
                console.log(data) //todo: what if result is false?
            })
            .catch(error => {
                console.error("There was an error!", error)
            })
    }

    render() {
        return (
            <form onSubmit={this.loadBalance}>
                <label><input type="radio" name="load_ccy" value="USD" checked={this.state.selectedCcy === "USD"}
                              onChange={this.handleOptionChange}/>USD</label><br/>
                <label><input type="radio" name="load_ccy" value="BTC" checked={this.state.selectedCcy === "BTC"}
                              onChange={this.handleOptionChange}/>BTC</label><br/>
                amount <input value={this.state.amount} onChange={this.handleAmountChange}/><br/>
                <button type="submit">load</button>
            </form>
        )
    }
}
