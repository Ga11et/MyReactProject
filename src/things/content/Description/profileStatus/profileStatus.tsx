import css from './profileStatus.module.css'
import React, { useState, createRef } from 'react'

type propsType = {
    isMyProfile: boolean
    status: string

    putStatus: (status: string) => void
}

const ProfileStatus: React.FC<propsType> = ({isMyProfile, ...props}) => {
    
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const toggleStatus = () => {
        if (editMode) {
            setEditMode(false)
            props.putStatus(status)
        } else if (isMyProfile) setEditMode(true)
    }

    const newTextLink = createRef<HTMLInputElement>();
    
    const writing = () => {
        if (newTextLink.current) setStatus(newTextLink.current.value)
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