import React, { Component } from 'react'

export class Example extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count1:0,
             count2:0
        }
    }
    
    render() {
        const {count1,count2} = this.state
        return (
            <div>
                <button onClick={()=>this.setState({count1: count1+1})} type='button'> Set Sstate {count1} </button>
                <button type='button'> Set Sstate {count2} </button>
            </div>
        )
    }
}

export default Example
