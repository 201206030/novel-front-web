import request from '../utils/request'

export function listHomeBooks() {
    return request.get('/home/books');
}


export function listHomeFriendLinks() {
    return request.get('/home/friend_Link/list');
}

