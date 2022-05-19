import request from '../utils/request'

export function getImgVerifyCode() {
    return request.get('/resource/imgVerifyCode');
}
