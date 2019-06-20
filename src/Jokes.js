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
            <div className="jokes">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                A random Joke:
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