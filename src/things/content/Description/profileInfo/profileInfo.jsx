import css from '../description.module.css'

const ProfilePageInfo = ({profileInfo, searchIcon, isMyProfile, Contact, setEditMode}) => {
    return <>
    {profileInfo.lookingForAJob
        ? <div className={css.searchWork}>
            <img src={searchIcon} alt="searchIcon" />
            <label>{profileInfo.lookingForAJobDescription}</label>
        </div>
        : null}
    <div className={css.contacts}>
        {Object.keys(profileInfo.contacts).map(el => {
            return <Contact key={el} name={el} data={profileInfo.contacts[el]} />
        })}
    </div>
    <p className={css.description} > {profileInfo.aboutMe}</p>
    {isMyProfile && <button className={css.redact} onClick={() => { setEditMode(true) }}>Redact</button>}
</>
}

export default ProfilePageInfo