import expect from 'expect'
import Immutable from 'immutable'
import {counter} from '../../src/reducers/counter'
import * as actionTypes from '../../src/actions/types.js'

let initialState = Immutable.fromJS({value: 0, loading: false})

describe('Counter reducer:', () => {
    it('should return the initial state', () => {
        expect(counter(initialState, {})).toEqual(initialState);
    });

    it('should handle COUNTER_INC', () => {
        const stateAfterAction = Immutable.fromJS({value: 1, loading: false})
        expect(counter(initialState, {
            type: actionTypes.COUNTER_INC
        })).toEqual(stateAfterAction);
    });

    it('should handle COUNTER_DEC', () => {
        expect(counter(initialState, {
            type: actionTypes.COUNTER_DEC
        })).toEqual(Immutable.fromJS({value: -1, loading: false}));
    });

    it('should handle COUNTER_REQUEST_PENDING', () => {
        expect(counter(initialState, {
            type: actionTypes.COUNTER_REQUEST_PENDING
        })).toEqual(Immutable.fromJS({value: 0, loading: true}));
    });

    it('should handle COUNTER_REQUEST_SUCCESS', () => {
        expect(counter(initialState, {
            type: actionTypes.COUNTER_REQUEST_SUCCESS,
            payload: 11
        })).toEqual(Immutable.fromJS({value: 11, loading: false}));
    });
});
