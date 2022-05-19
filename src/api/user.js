import request from '../utils/request'

export function register(params) {
    return request.post('/user/register', params);
}
