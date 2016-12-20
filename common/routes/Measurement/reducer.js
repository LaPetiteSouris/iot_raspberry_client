import * as types from '../../constants'

const initialState = {
  lastFetched: null,
  error: null,
  title: '',
  value: '',
  description: '',
}

export default function currentMeasurement(state = initialState, action) {
  switch (action.type) {
    case types.LOAD_MEASUREMENT_REQUEST:
      return {
        ...state,
        error: null,
      }
    case types.LOAD_MEASUREMENT_SUCCESS:
      return {
        ...state,
        title: action.payload.title,
        value: action.payload.value,
        description: action.payload.description,
        lastFetched: action.meta.lastFetched,
      }
    case types.LOAD_MEASUREMENT_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

// Example of a co-located selector
export const selectCurrentMeasurement = state => state.Measurement
