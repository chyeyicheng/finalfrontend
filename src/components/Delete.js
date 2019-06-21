import React from 'react';
import axios from 'axios';
import {Redirect} from "react-router-dom";


class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            redirect:false
        }
    }

    
    
    handleSubmit = (e) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: "https://finalagain2backend.herokuapp.com/delete_user",
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(response => {
            this.setState({
                redirect: true
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    
    renderRedirect=()=>{
        if (this.state.redirect){   
            return <Redirect to={"/"}/>
        }
    }
    render() {
            return (
                <div>
                    {this.renderRedirect()}
                    <form onSubmit={this.handleSubmit}>
                        <h1>Delete</h1>
                        <input type="hidden" onChange={this.handlePasswordChange}/>
                        <input type="submit" value="delete"/>
                    </form>
                </div>
            )
    }
}


export default Delete;