import { login, logout } from '../../actions/auth';

test('should setup login action object correctly', () => {
    const action = login('123');
    expect(action).toEqual({
        type: 'LOGIN',
        uid: '123'
    });
});

test('should setup logout action object correctly', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    })
});