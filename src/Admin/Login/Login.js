import React ,{Component} from 'react';
import './Login.css'
class Login extends Component {

    constructor() {
        super();
        this.state = {
            userName : '',
            passWord : '',
            errors : {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            userName: this.state.userName,
            password: this.state.password,
        }
        console.log(user);
    }

render() {
    return(
        <div className="loginContainer">
       
        <form className="LoginForm" onSubmit={ this.handleSubmit }>
            <span className="form-title">
			Sign In
		    </span>
            <div className="form-group userName">
                <input
                type="text"
                placeholder="user name"
                className="form-control"
                name="userName"
                onChange={ this.handleInputChange }
                value={ this.state.userName }
                />
            </div>
            <div className="form-group password">
                <input
                type="password"
                placeholder="Password"
                className="form-control"
                name="password"
                onChange={ this.handleInputChange }
                value={ this.state.password }
                />
            </div>
            <div className="form-group submit">
                <button type="submit" className="btn submitButton">
                    Login
                </button>
            </div>
        </form>
    </div>
    )
}

}

export default Login;