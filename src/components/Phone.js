import React from "react";
import axios from "axios"


class Phone extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:"",
            name:""
        }
    }

    componentDidMount(){
        axios.get('https://finalagain2backend.herokuapp.com/itemlist',{headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }})
        
        .then(result => {
            console.log(result.data.item.id)
            this.setState({
                id:result.data.item.id,
                name:result.data.item.name,
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    render(){
        return(
            <div>
                <p>Phone name:{this.state.name}</p>
                <p>Phone id:{this.state.id}</p>
                <a href="/userprofile">click here to go back</a>
            </div>
        )
    }

}

export default Phone