import React, { Component } from 'react';
import '../styles/landing.css'
import {Link} from 'react-router-dom'


class Landing extends Component {
    render() {
        return (
            
            <div className="flex-container">
            <h1 className="first">WHO'S WATCHING?</h1>
            <div className="users-position">
            {this.props.users.map(u => {
                return (
                    <Link to={"/catalog"} >
                    <div className= {u.color}>{u.name}</div>
                    </Link>
                )
            })}
            </div>
            </div>
        )
    }
}

export default Landing;
