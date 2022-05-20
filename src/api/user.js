import request from '../utils/request'

export function register(params) {
    return request.post('/user/register', params);
}

export function login(params) {
    return request.post('/user/login', params);
}

export function submitFeedBack(params) {
    return request.post('/user/feedback', params);
}

export function comment(params) {
    return request.post('/user/comment',params);
}

export function deleteComment(id) {
    return request.delete(`/user/comment/${id}`);
}

export function updateComment(id,content) {
    return request.putForm(`/user/comment/${id}`,content);
}