import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Layout from '../../common/layout';
import Home from './home';
import Music from './music';
import About from './about';
import MyRouter from './index';

export const routes = (
    <Route path="/" compoment={ MyRouter }>
        <IndexRoute compoment={ Home } />
        <Route path="/home" compoment={ Home } />
        <Route path="/music" compoment={ Music } />
        <Route path="/about" compoment={ About } />
    </Route>
);


// export const routes = [
//     { path: '/',
//       component: Layout,
//       indexRoute: { component: Home }
//       childRoutes: [
//         { path: 'about', component: About },
//         { path: 'inbox',
//           component: Inbox,
//           childRoutes: [
//             { path: '/messages/:id', component: Message },
//             { path: 'messages/:id',
//               onEnter: function (nextState, replaceState) {
//                 replaceState(null, '/messages/' + nextState.params.id)
//               }
//             }
//           ]
//         }
//       ]
//     }
//   ]