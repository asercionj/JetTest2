import React from 'react';
// /import {ValidateEmail} from "./Valid.js";

class Title extends React.Component{

    myInput = React.createRef();

    goToTable = (event) => {
        //1.stop the form from submmiting
        event.preventDefault();
        //2. get the text from that input
        const emailAddr =(this.myInput.current.value);
        //Display output
        console.log(emailAddr);
    };


    render(){
        return (
        <form className ="email" onSubmit={this.goToTable}>
    <ul>
        <li><a className="active" href="#home">JetStox</a></li>
        <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">Products ▼ </a>
            <div className="dropdown-content">
                <a href="Stuff1URL">Stuff 1</a>
                <a href="Stuff2URL">Stuff 2</a>
                <a href="Stuff3URL">Stuff 3</a>
            </div>
        </li>
        <button className="button buttonA">Prices</button>
        <button className="button buttonB">Company ▼</button>
        <button className="button button2">Get Started</button>
        <button className="button button3">Sign in</button> 
    </ul>
    
        <h2> A Collaboration Tool</h2>
        <h3>for traders.</h3>
            <input type ="Text" ref={this.myInput} required placeholder ="Enter Email Address"/>
            <button type ="submit"> Get Started </button>
        </form>


             )
    }
}
export default Title;