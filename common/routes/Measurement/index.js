if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes(store) {
  return {
    path: 'measurement',
    getComponents(location, cb) {
      require.ensure([
        './containers/MeasurementPage',
        './reducer',
      ], (require) => {
        const MeasurementPage = require('./containers/MeasurementPage').default
        const measurementReducer = require('./reducer').default
        injectAsyncReducer(store, 'measurements', measurementReducer)
        cb(null, MeasurementPage)
      })
    },
  }
}
