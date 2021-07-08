import React, { Component } from 'react'

export default class Bgcolor extends Component {
color=()=>{
        var x=document.getElementById("bgcolor").value;
       
        document.body.style.backgroundColor=x;
        document.getElementById("h1").style.color="white";
         document.getElementById("h3").style.color="white";

    }
    render() {
        return (
            <div id="col">
            <h1 id="h1">Hello, World !</h1>
            <h3 id="h3">What color?</h3>
            <select onChange={this.color} id="bgcolor">
                <option value="" selected disabled hidden>choose color</option>
                <option value="#9400D3">Dark voilet</option>
                <option value="#2F4F4F">DarkSlateGray</option>
                <option value="#008B8B">DarkCyan</option>
                <option value="#556B2F">Olive green</option>
                <option  value="#FF8C00">Dark orange</option>
                
            </select>
        </div>
        )
    }
}
