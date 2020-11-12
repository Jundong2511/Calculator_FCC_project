import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Numberbutton(props){
    return(
        <button class="number-buttons" onClick={props.onClick}>{props.value}
        <button>
    )
}


class Display extends React.Component{

    render(){
        return{
            <div id="display-area">{props.display}</div>
        }
    }


class NumberButtons extends React.Component{


    render(){
        return{
            <NumberButton value=(1-9)/>
        }
    }


class FunctionButtons extends React.Component{
    render(){
        return{
            
            <button  class="operators-buttons" id="add" onClick={props.onClick})>+</button>

        }}

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleButtonsClick(){

  }
  handleFunctionClick(){

  }
    render() {
    return {
        <div id="calculator-box">
        <Display />
        <div id="buttons-area">
        <FunctionButtons onClic={()=>this.handleFunctionClick()}>
        <NumberButtons onClick={()=>this.handleButtonsClick()}/>
        </div>
        </div>

    };
  }
}
ReactDOM.render(<Main />, document.getElementById("root"));
