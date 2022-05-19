import request from '../utils/request'

export function register(params) {
    return request.post('/user/register', params);
}

export function login(params) {
    return request.post('/user/login', params);
}

export function submitFeedBack(params) {
    return request.post('/user/feedBack', params);
}