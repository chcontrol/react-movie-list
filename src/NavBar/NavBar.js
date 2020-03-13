import React, { Component } from 'react'
import logo from '../logo.svg';
import '../App.css';


export class NavBar extends Component {
    render() {
        return (
            <div className="App NavBar">
            <table>
                <tbody>
                <tr>
                    <td>
                    <img src={logo} className="App-logo " alt="logo" />
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        )
    }
}

export default NavBar
