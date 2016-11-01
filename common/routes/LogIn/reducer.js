import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
  form: formReducer, // this is the form reducer
})

export default reducers
