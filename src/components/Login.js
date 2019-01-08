import React, { Component } from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
//https://medium.com/technoetics/create-basic-login-forms-using-create-react-app-module-in-reactjs-511b9790dede
class Login extends Component {
	constructor(props){
		super(props);
		this.state={
			username:'',
			password:''
		}
	}
	
	handleClick(event){
		var apiBaseUrl = "http://localhost:3000/api/";
		var self = this;
		var payload={
			"email":this.state.username,
			"password":this.state.password
		}
		axios.post(apiBaseUrl+'login', payload)
		.then(function (response) {
			if(response.data.code == 200){
			console.log("Login successfull");
			// var uploadScreen=[];
			// uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
			// self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
		}
		else if(response.data.code == 204){
			alert("username password do not match")
		}
		else{
			alert("Username does not exist");
		}
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div>
				<AppBar
					title="Login"
				/>
				<TextField
					hintText="Enter your Username"
					floatingLabelText="Username"
					onChange = {(event,newValue) => this.setState({username:newValue})}
					/>
				<br/>
				<TextField
					type="password"
					hintText="Enter your Password"
					floatingLabelText="Password"
					onChange = {(event,newValue) => this.setState({password:newValue})}
				/>
				<br/>
				<RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
			</div>
		);
	}
}
const style = {
 margin: 15,
};

export default Login;