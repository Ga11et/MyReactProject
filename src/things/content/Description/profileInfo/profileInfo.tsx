import React from 'react'
import { profileType } from '../../../../types/types'
import css from '../description.module.css'

type propsType = {
    profileInfo: profileType
    searchIcon: string
    isMyProfile: boolean
    Contact: any

    setEditMode: (some: boolean) => void
}

const ProfilePageInfo: React.FC<propsType> = ({profileInfo, searchIcon, isMyProfile, Contact, setEditMode}) => {
    const isValidcontactsType = (x: string): x is keyof typeof profileInfo.contacts => x in profileInfo.contacts
    return <>
    {profileInfo.lookingForAJob
        ? <div className={css.searchWork}>
            <img src={searchIcon} alt="searchIcon" />
            <label>{profileInfo.lookingForAJobDescription}</label>
        </div>
        : null}
    <div className={css.contacts}>
        {Object.keys(profileInfo.contacts)
            .filter(isValidcontactsType)
            .map(el => {
            return <Contact key={el} name={el} data={profileInfo.contacts[el]} />
        })}
    </div>
    <p className={css.description} > {profileInfo.aboutMe}</p>
    {isMyProfile && <button className={css.redact} onClick={() => { setEditMode(true) }}>Redact</button>}
</>
}

export default ProfilePageInfo