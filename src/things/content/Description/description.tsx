import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import { contactsType, profileType } from '../../../types/types'
import css from './description.module.css'
import ProfileRedactingForm from './InfoForm/infoForm'
import ProfilePageInfo from './profileInfo/profileInfo'
import ProfileStatus from './profileStatus/profileStatus'

export type IUser = profileType

export type IProps = {
    contacts: contactsType
    initialValues: profileType

    setEditMode: (some: boolean) => void
    onSubmit: (info: profileType) => void
}

const ProfileRedactingFormWithRedux = reduxForm<IUser, IProps>({ form: 'profileForm' })(ProfileRedactingForm)

type propsType = {
    searchIcon: string
    isMyProfile: boolean
    profileInfo: profileType
    altphoto: string
    status: string

    profileFormSubmit: (info: profileType) => Promise<void>
    changeProfilePhoto: (file: any) => void
    putStatus: (status: string) => void
}

const Description: React.FC<propsType> = ({ searchIcon, isMyProfile, profileFormSubmit, changeProfilePhoto, profileInfo, ...props }) => {

    let [editMode, setEditMode] = useState(false)

    const changePhoto = (photo: any) => {
        changeProfilePhoto(photo.target.files[0])
    }

    const formSubmit = (info: profileType) => {
        profileFormSubmit(info)
            .then(() => {
                setEditMode(false)
            })
    }

    return (
        <div className={css.item}>
            <section className={css.profile} >
                <div>
                    <img src={profileInfo.photos.large
                        ? profileInfo.photos.large
                        : props.altphoto} alt="avatar" />
                    <div className={css.change} >
                        <input type="file" id="file" onChange={changePhoto} />
                        {isMyProfile && <label htmlFor="file" >Change</label>}
                    </div>
                </div>
                <div className={css.noPic}>
                    <h3>{profileInfo.fullName}</h3>
                    
                    <ProfileStatus
                        status={props.status}
                        putStatus={props.putStatus}
                        isMyProfile={isMyProfile} />

                    {editMode
                        ? <ProfileRedactingFormWithRedux
                            contacts={profileInfo.contacts}
                            initialValues={profileInfo}
                            setEditMode={setEditMode}
                            onSubmit={formSubmit} />
                        : <ProfilePageInfo 
                            setEditMode={setEditMode} 
                            Contact={Contact} 
                            profileInfo={profileInfo}
                            searchIcon={searchIcon}
                            isMyProfile={isMyProfile} />
                    }
                </div>
            </section>
        </div >
    )
}

type contactPropsType = {
    name: string
    data: string
}

const Contact: React.FC<contactPropsType> = ({ name, data }) => {
    if (!!data) return <p>{name}: <span>{data}</span></p>
    else return null
}

export default Description
