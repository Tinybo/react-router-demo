import React from 'react';
import { IndexRoute, Route } from 'react-router';

import App from './app';
import MyRouter from './page/myRouter';
import Home from './page/myRouter/home';
import Music from './page/myRouter/music';
import About from './page/myRouter/about';

export const routes = (
    <Route path="/" component={ App }>
        <Route component={ MyRouter }>
            <IndexRoute component={ Home } />
            <Route path="" component={ Home }/>
            <Route path="/music" component={ Music } />
            <Route path="/about" component={ About } />
        </Route> 
    </Route>
);