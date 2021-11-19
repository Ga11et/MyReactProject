export type contactsType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type photosType = {
    small: string, large: string
}
export type profileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType
    aboutMe: string
}
type locationType = {
    country: string, city: string
}
export type personType = {
    name: string
    id: number
    photos: photosType
    status: string
    followed: boolean
    location?: locationType
}
export type PostType = {
    id: number
    message: string
}
export type dialogsPersonType = {
    img: string
    url: string
    name: string
    id: number
}
export type messageType = {
    author: string
    id: number
    message: string
}
export type linkType = {
    name: string
    to: string
    id: number
}
export type friendsType = {
    img: string
    name: string
    id: number
}


type actionType<T> = T extends {[key: string]: infer U} ? U : never
export type actionsTypes<T extends {[key: string]: (...args: Array<any>) => any}> = ReturnType<actionType<T>> 