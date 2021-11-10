import css from './profileStatus.module.css'
import React from 'react'
import { useState } from 'react'

const ProfileStatus = ({isMyProfile, ...props}) => {
    
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const toggleStatus = () => {
        if (editMode) {
            setEditMode(false)
            props.putStatus(status)
        } else if (isMyProfile) setEditMode(true)
    }

    const newTextLink = React.createRef()
    
    const writing = () => {
        setStatus(newTextLink.current.value)
    }

    return <div className={css.main}>
        {editMode 
            ? <input ref={newTextLink} 
                    onChange={ () => {writing()}} 
                    autoFocus={true} 
                    onBlur={ () => {toggleStatus()} } 
                    value={status} />
            : <p onDoubleClick={ () => {toggleStatus()} } >
                {status}
            </p> }
    </div>
}

export default ProfileStatus