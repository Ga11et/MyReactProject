import * as axios from 'axios'
import FormData from 'form-data'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "48f5b1a7-6286-4f77-9a40-f9b16f3f5224"
    }
})

export const getPeople = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then( data => {return data.data.items})
}

export const postFollow = (userId) => {
    return instance.post(`follow/${userId}`)
        .then( data => {return data.data.resultCode})
}

export const deleteFollow = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then( data => {return data.data.resultCode})
}

export const isAuthCheck = () => {
    return instance.get('auth/me')
        .then( data => { 
            const result = {...data.data.data, resultCode: data.data.resultCode}
            return result })
}
export const getUser = (currentUserId) => {
    return instance.get(`profile/${currentUserId}`)
        .then( data => {
            return data.data
        })
}
export const getStatusApi = (userId) => {
    return instance.get(`profile/status/${userId}`)
        .then( data => {
            return data.data
        })
}
export const putStatusApi = (status) => {
    return instance.put(`profile/status`, { status })
        .then( data => {
            return data.data.resultCode
        })
}
export const postLoginDataApi = (data) => {
    let {email, password, rememberMe, captcha} = data
    return instance.post(`auth/login`, {email, password, rememberMe, captcha})
        .then( response => {
            return ({
                message: response.data.messages[0],
                resultCode: response.data.resultCode
            })
        })
}
export const getCaptchaApi = async () => {
    const response = await instance.get('security/get-captcha-url')
    return response.data.url
}
export const logoutApi = () => {
    return instance.delete(`auth/login`)
        .then( response => {
            return ({
                resultCode: response.data.resultCode
            })
        })
}
export const putProfilePhotoApi = async (photo) => {
    const photoForLoading = new FormData()
    photoForLoading.append('image', photo);
    const response = await instance.put('profile/photo', photoForLoading, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return ({
        resultCode: response.data.resultCode,
        photos: response.data.data.photos
    })
}
export const profileFormSubmitApi = async (info) => {
    const response = await instance.put('profile', info)
    return ({
        resultCode: response.data.resultCode,
        errorMessage: response.data.messages[0]
    })
}

