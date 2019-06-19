import React from "react";
import axios from "axios";

class Example extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            setup:"",
            punchline:""
            
            
        };
    }

    componentDidMount(){
        axios({
            // GET API for Quotes of the Day
            method: 'GET',
            url: "https://official-joke-api.appspot.com/random_joke"
        })
            .then(response => {
                console.log(response.data)
                this.setState({
                    setup:response.data.setup,
                    punchline:response.data.punchline,
                    
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render(){
        return(
            <div>
                This is an external api call:
                <br/>
                <br/>
                {this.state.setup}
                <br/>
                <br/>
                {this.state.punchline}
                <br/>
                <br/>
                lol
            </div>
        );
        
    }

}

export default Example;