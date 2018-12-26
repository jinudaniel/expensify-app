import authReducer from '../../reducers/auth';

test('should login a user', () => {
    const action = {
        type: 'LOGIN',
        uid: '123'
    };
    const state = authReducer({}, action);
    expect(state.uid).toBe('123');
});

test('should logout a user', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid: 'anything' }, action);
    expect(state).toEqual({});
});