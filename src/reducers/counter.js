import Immutable, {List} from 'immutable'
import {COUNTER_INC, COUNTER_DEC, COUNTER_REQUEST_PENDING, COUNTER_REQUEST_SUCCESS, COUNTER_REQUEST_FAILURE} from 'actions/types.js'

const initialState = Immutable.fromJS({value: 0, loading: false})

export function counter(state = initialState, action) {
    switch (action.type) {
        case COUNTER_INC:
            return state.set('value', state.get('value') + 1)

        case COUNTER_DEC:
            return state.set('value', state.get('value') - 1)

        case COUNTER_REQUEST_PENDING:
            return state.set('loading', true)

        case COUNTER_REQUEST_SUCCESS:
            return state.set('loading', false).set('value', action.payload)

        default:
            return state
    }
}
