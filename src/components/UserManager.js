import {Component} from "react";


export class UserManager extends Component {
    constructor(props) {
        super(props);
        /*this.logOut = this.logOut.bind(this)*/
        this.state = {
            loggedIn: true,
            name: "ronaldo",
        }
    }

    logout = () => {
        this.props.onTokenChange("")
        this.setState({
            loggedIn: false,
            name: "",
        })
    }
    login = (name) => {
        fetch('http://localhost:8080/customers/register?name=' + name)
            .then(res => res.text())
            .then((data) => {
                this.props.onTokenChange(data)
                this.setState({
                    loggedIn: true,
                    name: name,
                })
            })
            .catch(error => {
                console.error("There was an error!", error)
            })
    }

    render() {
        if (this.state.loggedIn) {
            return (
                <UserInfo onLogout={this.logout} name={this.state.name} token={this.props.token}/>
            )
        }
        else {
            return (
                <UserLogin onLogin={this.login}/>
            )
        }
    }
}

function UserInfo(props) {
    return (
        <div>
            name: {props.name}<br />
            token: {props.token}<br />
            <button onClick={props.onLogout}>logout</button>
        </div>
    )
}

class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
    }
    handleLogin = formSubmitEvent => {
        formSubmitEvent.preventDefault()

        this.props.onLogin(this.state.name)
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                name <input value={this.state.name} onChange={this.handleNameChange}/><br/>
                <button type="submit">register</button>
            </form>
        )
    }
}