import {COUNTER_INC, COUNTER_DEC, COUNTER_REQUEST_PENDING, COUNTER_REQUEST_FAILURE, COUNTER_REQUEST_SUCCESS} from 'actions/types.js'

export const counterInc = () => ({type: COUNTER_INC})

export const counterRequestPending = () => ({type: COUNTER_REQUEST_PENDING})

export const counterRequestSuccess = (payload) => ({type: COUNTER_REQUEST_SUCCESS, payload})

export const counterDec = () => ({type: COUNTER_DEC})

export const multiDispatchExample = (param1) => dispatch => {
    dispatch(counterRequestPending())

    setTimeout(() => {
        dispatch(counterRequestSuccess(111))
    }, 2000);
}
