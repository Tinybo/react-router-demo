import React, { Component } from 'react';
import './myRouter.scss';

import { Link, IndexLink } from 'react-router';

class MyRouter extends Component {
    constructor () {
        super();

        this.state = {

        }
    }

    render () {
        return (
            <div className="myRouterContainer">
                <Link to="/">Home</Link>
                <Link to="/music">Music</Link>
                <Link to="/about">About</Link>

                <main>
                    { this.props.children || '' }
                </main>
            </div>
        )
    }
}

export default MyRouter;