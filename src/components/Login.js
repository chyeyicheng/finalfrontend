import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom"

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:"",
            redirect: false,
            token:""
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        axios({
            method:"POST",
            url:"https://finalagain2backend.herokuapp.com/login",
            data:{
                email:this.state.email,
                password:this.state.password
            }
        })
        .then(response => {
            console.log(response.data.access_token)
            localStorage.setItem("token", response.data.access_token)
            this.setState({
                redirect: true
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    handleEmailChange = (e) => {
        this.setState({email: e.target.value})
    }
    handlePasswordChange = (e) => {
        this.setState({password: e.target.value})
    }

    renderRedirect=()=>{
        if (this.state.redirect){
            return <Redirect to={"/userprofile"}/>
        }
    }

    render(){
        return(
            <div>
                {this.renderRedirect()}
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>email</p>
                    <input name="email" onChange={this.handleEmailChange}/>
                    <br/>
                    <p>password</p>
                    <input name="password" onChange={this.handlePasswordChange}/>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        );

    }


}

export default Login