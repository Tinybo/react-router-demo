import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './layout.scss';

class Layout extends Component {
    constructor () {
        super();

        this.state = {

        }
    }

    render () {
        return (
            <div className="layoutContainer">
                This is layout page!
                <header>
                    <Link to="/home">Home</Link>
                    <Link to="/music">Music</Link>
                    <Link to="/about">About</Link>
                </header>

                { this.props.children }
            </div>
        )
    }
}

export default Layout;