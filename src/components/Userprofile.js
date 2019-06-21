import React ,{ Component }from 'react';
import axios from "axios";
import Phone from "./Phone";
import Addphone from "./Addphone"

class Userprofile extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            id:"",
            email: "",
            name: "", 
            token:""
        }
    }
    componentDidMount() {
        axios.get('https://finalagain2backend.herokuapp.com/userprofile',{headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})
        
        .then(result => {
            console.log(result.data.user.id)
            this.setState({
                id:result.data.user.id,
                name:result.data.user.name,
                email:result.data.user.email
            
            })
        })
        .catch(error => {
            console.log(error);
        })
    }


    render(){
    return (
    <div>
        <h1>User Profile</h1>
        <p>id : {this.state.id}</p>
        <p>name :{this.state.name}</p>
        <p>email :{this.state.email}</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <a href="/addaphone">add a phone here</a>
        <br/>
        <a href="/yourphone">your phone</a>
        <br/>
        <br/>
        <br/>
        <p>click here to edit profile</p>
        <a href="/edit">edit profile</a>
        <p>click here to delete profile</p>
        <a href="/delete">delete profile</a>
        <p>click here to sign out</p>
        <a href="/signout">Sign out</a>
    </div>
    )
    }
}


export default Userprofile;