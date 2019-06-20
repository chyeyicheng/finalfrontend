import React from "react";
import {Redirect} from "react-router-dom";
import axios from "axios"




class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            redirect: false
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        axios({
            method:"POST",
            url:"http://localhost:5000/signup",
            data:{
                name:this.state.name,
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

    handleNameChange = (e) => {
        this.setState({name: e.target.value})
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
                <h1>Sign up</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>name</p>
                    <input name="name" onChange={this.handleNameChange}/>
                    <br/>
                    <p>email</p>
                    <input name="email" onChange={this.handleEmailChange}/>
                    <br/>
                    <p>password</p>
                    <input name="password" onChange={this.handlePasswordChange}/>
                    <br/>
                    <input type="submit" value="Create"/>
                </form>
            </div>
        );
    }

}

export default Signup