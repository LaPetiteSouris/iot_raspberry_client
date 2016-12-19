if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import {injectAsyncReducer} from '../../store'

export default function createRoutes(store) {
  return {
    path: 'login',
    getComponents (location, cb) {
      require.ensure([
        './containers/MeasurementPage',
        './reducer',
      ], (require) => {
        const MeasurementPage = require('./containers/MeasurementPageSmart').default
        cb(null, MeasurementPage)
      })
    },
  }
}
