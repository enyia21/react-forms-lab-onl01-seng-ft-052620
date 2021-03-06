import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  modifyLoggin=(event) =>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  clickSubmission = (event) => {
    event.preventDefault();
    const userLogin = {
      username: this.state.username,
      password: this.state.password
    }
    if (!!userLogin.username && !!userLogin.password){
      this.props.handleLogin(userLogin);
    }
  }
  render() {
    return (
      <form onSubmit={this.clickSubmission}>
        <div>
          <label>
            Username
            <input onChange={this.modifyLoggin} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.modifyLoggin} id="password" name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
