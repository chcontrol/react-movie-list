import React, { Component } from 'react'
import ReactToPrint from 'react-to-print';

export class TagBarcodePrint extends Component {
    render() {
        return (
            <div>
                <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
            </div>
        )
    }
}

export default TagBarcodePrint
