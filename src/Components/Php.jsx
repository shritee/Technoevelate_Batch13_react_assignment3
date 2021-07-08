import React, { Component } from 'react'
import './Voter.css'

export default class Php extends Component {
    state={
        vote:0
    }
    voter=()=>{
        this.setState({vote:this.state.vote+1})
    }
    render() {
        
        return (
            <>
            <div className="div">{this.state.vote} PHP <button onClick={this.voter} className="btn">Click Here</button></div>
        
            </>
        )
    }
}
