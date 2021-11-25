import axios from 'axios'
import FormData from 'form-data'
import { personType, profileType, searchFormType } from '../types/types'

// Types

export type loginDataType = {
    email: string, password: string, rememberMe: boolean, captcha: null | string
}
type GetpeopleDataType = {
    items: Array<personType>, totalCount: number, error: string
}
export type CommonDataType = {
    resultCode: number, messages: Array<string>, data: Object
}
export type AuthMeDataType = {
    data: {id: number, email: string, login: string}
    resultCode: number
    messages: Array<string>
}
type GetCaptchaUrlDataType = {
    url: string
}
export type PhotosDataType = {
    resultCode: number, messages: Array<string>, data: {photos: {small: string, large: string}}
}

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "3e289f88-561e-411a-9d9b-7a41c7a17d8c"
    }
})

// API

export const API = {
    getPeople: (currentPage: number, pageSize: number, searchForm: searchFormType = {term: '', friend: ''}) => {
        return instance.get<GetpeopleDataType>(`users?page=${currentPage}&count=${pageSize}&term=${searchForm.term}&friend=${searchForm.friend}`)
            .then( data => data.data)
    },
    postFollow: (userId: number) => {
        return instance.post<CommonDataType>(`follow/${userId}`)
            .then( data => data.data.resultCode)
    },
    deleteFollow: (userId: number) => {
        return instance.delete<CommonDataType>(`follow/${userId}`)
            .then( data => data.data.resultCode)
    },
    isAuthCheck: () => {
        return instance.get<AuthMeDataType>('auth/me')
            .then( data => data.data)
    },
    getUser: (currentUserId: number | null) => {
        return instance.get<profileType>(`profile/${currentUserId}`)
            .then( data => data.data)
    },
    getStatusApi: (userId: number) => {
        return instance.get<string>(`profile/status/${userId}`)
            .then( data => data.data)
    },
    putStatusApi: (status: string) => {
        return instance.put<CommonDataType>(`profile/status`, { status })
            .then( data => data.data.resultCode)
    },
    postLoginDataApi: (data: loginDataType) => {
        let {email, password, rememberMe, captcha} = data
        return instance.post<CommonDataType>(`auth/login`, {email, password, rememberMe, captcha})
            .then( response => response.data )
    },
    getCaptchaApi: async () => {
        const response = await instance.get<GetCaptchaUrlDataType>('security/get-captcha-url')
        return response.data.url
    },
    logoutApi: () => {
        return instance.delete<CommonDataType>(`auth/login`)
            .then( response => response.data.resultCode)
    },
    putProfilePhotoApi: async (photo: File) => {
        const photoForLoading = new FormData()
        photoForLoading.append('image', photo);
        const response = await instance.put<PhotosDataType>('profile/photo', photoForLoading, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data
    },
    profileFormSubmitApi: async (info: profileType) => {
        const response = await instance.put<CommonDataType>('profile', info)
        return response.data
    }
}


