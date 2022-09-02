import React from 'react';
import './App.css';
import InputField from './Components/InputField';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      values: {
        username:"",
        email:"",
        password:"",
        confirmPassword:""
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.inputs = [
      {type: "text", placeholder: "username", name: "username", errorMsg: "Username should be any alphanumeric character with min char 3 and max char 12", pattern: "^[A-Za-z0-9]{3, 12}$"},
      {type: "email", placeholder: "email", name: "email", errorMsg: "Should be a valid email"},
      {type: "password", placeholder: "password", name: "password", errorMsg: "It should contain 1 letter, 1 number and 1 special character"},
      {type: "password", placeholder: "confirm password", name: "confirmPassword", errorMsg: "This should match the password"}
    ]
  }

  handleChange(e, input) {
    this.setState({values: {...this.state.values, [input.name]: e.target.value}});
    console.log(this.state.values.username);
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  
  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className='inputFields'>
            {
              this.inputs.map(input => {
                return <InputField inputProps={input} handleChange={this.handleChange} />
              })
            }
          </div>
          {/* <input type="text" placeholder="username" value={this.state.username} onChange={this.handleChange}></input> <br/><br/>
          <input type="text" placeholder="email" value={this.state.email}></input> <br/><br/>
          <input type="text" placeholder="password" value={this.state.password}></input> <br/><br/>
          <input type="text" placeholder="confirm password" value={this.state.confirmPassword}></input> <br/><br/> */}
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
