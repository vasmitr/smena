import {createAction} from 'redux-actions'
import {getCandles} from 'api'

export const getCandlesSuccess = createAction('GET_CANDLES_SUCCESS')
export const getCandlesFailure = createAction('GET_CANDLES_FAILURE')

export const getCandlesRequest = createAction(
  'GET_CANDLES_REQUEST',
  payload => payload,
  payload => ({
    async: true,
    apiCall: () => getCandles(payload),
    successCreator: getCandlesSuccess,
    failureCreator: getCandlesFailure
  })
)
