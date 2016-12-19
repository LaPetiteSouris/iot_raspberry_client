// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../components/App'

export default function createRoutes(store) {
  const root = {
    path: '/',
    component: App,
    getChildRoutes(location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./Measurement').default(store), // no need to modify store, no reducer
          require('./LogIn').default(store), // add async reducer
          require('./NotFound').default,
        ])
      })
    },

  }

  return root
}
