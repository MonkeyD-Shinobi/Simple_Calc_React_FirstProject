import React from "react";

class calc extends React.Component{
    constructor(){
        super();
        this.state = {
            initial : 0 
        };

    }

    add = () => {
        this.setState((prevState) => {
            return{
                initial : prevState.initial+2
            }
        })
    }

    square = () => {
        this.setState((prevState) => {
            return{
                initial : Math.pow(prevState.initial , 2)
            }
        })
    }

    double = () => {
        this.setState((prevState) => {
            return{
                initial : prevState.initial*2
            }
        })
    }

    divide = () => {
        this.setState((prevState) => {
            return{
                initial : prevState.initial/2
            }
        })
    }

    sub = () => {

        const {initial} = this.state;

        if(initial===0){
        return;
    }

        this.setState((prevState) => {
            return{
                initial : prevState.initial-2
            }
        })
    }
    render(){
        return(
            <div className="calc">
                <h1 className="tag">{this.state.initial}</h1>
                <div className="butt">
                    <button onClick={this.add}>Add 2!</button>
                    <button onClick={this.square}>Square!</button>
                    <button onClick={this.double}>Double!</button>
                    <button onClick={this.divide}>Divided 2!</button>
                    <button onClick={this.sub}>Subtract 2!</button>
                </div>
            </div>
        );
    }
}

export default calc;