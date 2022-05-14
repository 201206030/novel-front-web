import request from '../utils/request'

export function listVisitRankBooks() {
    return request.get('/book/visitRank');
}


export function listNewestRankBooks() {
    return request.get('/book/newestRank');
}

export function listUpdateRankBooks() {
    return request.get('/book/updateRank');
}

