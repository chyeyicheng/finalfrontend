import React from 'react';
import {Redirect} from "react-router-dom"


class Signout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: "",
            password: "", 
            token:"",
            isLogin: true
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        localStorage.removeItem("token")
        this.setState({isLogin:false})
        }

    render() {
        if (this.state.isLogin){
            return(
                <form onSubmit={this.handleSubmit}>
                <h1>Logout??</h1>
                <input type="submit" value="Logout"/>
            </form>
            )
        }
        else {
            return <Redirect to="/"/>
        }
    }
}


export default Signout;