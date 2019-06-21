import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom"


class Edit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            redirect:false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        axios.post("https://finalagain2backend.herokuapp.com/update", {name: this.state.name, email: this.state.email, password: this.state.password}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
        }})
        .then(response => {
            console.log(response.data.access_token)
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
                    <input type="submit" value="Edit"/>
                </form>
            </div>
        )
    }
}

export default Edit