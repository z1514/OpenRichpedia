/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

/* eslint-disable global-require */

// The top-level (parent) route
const routes = {
  path: '',

  // Keep in mind, routes are evaluated in order
  children: [
    {
      path: '',
      load: () => import(/* webpackChunkName: 'home' */ './home'),
    },
    // {
    //   path: '/dataset',
    //   load: () => import(/* webpackChunkName: 'dataset' */ './dataset'),
    // },
    {
       path: '/ontology',
       load: () => import(/* webpackChunkName: 'ontology' */ './ontology'),
    },

    {
      path: '/resource/:id',
      load: () => import(/* webpackChunkName: 'resource' */ './resource'),
    },
    
    {
      path: '/resource',
      load: () => import(/* webpackChunkName: 'resource' */ './resource'),
    },
    {
      path: '/tutorial',
       load: () => import(/* webpackChunkName: 'tutorial' */ './tutorial'),
     },

     {
      path: '/dataset/:datatype',
      load: () => import(/* webpackChunkName: 'dataset' */ './dataset'),
    },

    {
      path: '/sparql',
      load: () => import(/* webpackChunkName: 'sparql' */ './sparql'),
    },

    {
      path: '/dataset',
      load: () => import(/* webpackChunkName: 'dataset' */ './dataset'),
    },

    {
      path: '/download',
      load: () => import(/* webpackChunkName: 'download' */ './download'),
    },

    {
      path: '/about',
      load: () => import(/* webpackChunkName: 'about' */ './about'),
    },
    

    // Wildcard routes, e.g. { path: '(.*)', ... } (must go last)
    {
      path: '(.*)',
      load: () => import(/* webpackChunkName: 'not-found' */ './not-found'),
    },
  ],

  async action({ next }) {
    // Execute each child route until one of them return the result
    const route = await next();

    // Provide default values for title, description etc.
    //route.title = `${route.title || 'Untitled Page'} - Richpedia`;
    route.title = `Richpedia`;
    route.description = route.description || '';

    return route;
  },
};

// The error page is available by permanent url for development mode
if (__DEV__) {
  routes.children.unshift({
    path: '/error',
    action: require('./error').default,
  });
}

export default routes;
