import React, { useState } from 'react'
import { reduxForm } from 'redux-form'
import css from './description.module.css'
import ProfileRedactingForm from './InfoForm/infoForm'
import ProfilePageInfo from './profileInfo/profileInfo'
import ProfileStatus from './profileStatus/profileStatus'

const ProfileRedactingFormWithRedux = reduxForm({
    form: 'profileForm'
})(ProfileRedactingForm)

let Description = ({ searchIcon, isMyProfile, profileFormSubmit, changeProfilePhoto, profileInfo, ...props }) => {

    let [editMode, setEditMode] = useState(false)

    const changePhoto = (photo) => {
        changeProfilePhoto(photo.target.files[0])
    }

    const formSubmit = (info) => {
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

const Contact = ({ name, data }) => {
    if (!!data) return <p>{name}: <span>{data}</span></p>
    else return null
}

export default Description
