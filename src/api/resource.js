import request from '../utils/request'

export function getImgVerifyCode() {
    return request.get('/front/resource/img_verify_code');
}
