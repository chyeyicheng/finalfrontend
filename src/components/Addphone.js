import React from "react";
import axios from "axios";
import {Redirect} from "react-router-dom";

class Addphone extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            redirect:false
        }
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5000/create_item", {name: this.state.name}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
        }})
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

    nameChangeHandler=(e)=>{
        e.preventDefault()
        this.setState({name: e.target.value})
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
                    <p>Your phone name:</p>
                    <input onChange={this.nameChangeHandler}/>
                    <input type="submit" value="add" />
                </form>
            </div>
        )
    }

}

export default Addphone