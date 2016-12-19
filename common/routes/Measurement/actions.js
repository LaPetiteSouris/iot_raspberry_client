import {
  LOAD_MEASUREMENT_REQUEST, LOAD_MEASUREMENT_SUCCESS, LOAD_MEASUREMENT_FAILURE,
}
  from '../../constants'

export function loadMEASUREMENT(slug) {
  return (dispatch, getState, { axios }) => {
    const { protocol, host } = getState().sourceRequest
    dispatch({ type: LOAD_MEASUREMENT_REQUEST })
    return axios.get(`${protocol}://${host}/api/v0/MEASUREMENTs/${slug}`)
      .then(res => {
        dispatch({
          type: LOAD_MEASUREMENT_SUCCESS,
          payload: res.data,
          meta: {
            lastFetched: Date.now(),
          },
        })
      })
      .catch(error => {
        console.error(`Error in reducer that handles ${LOAD_MEASUREMENT_SUCCESS}: `, error)
        dispatch({
          type: LOAD_MEASUREMENT_FAILURE,
          payload: error,
          error: true,
        })
      })
  }
}
