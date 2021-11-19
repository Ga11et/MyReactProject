import React from 'react'
import css from './settings.module.css'

type propsType = {

}

let Settings: React.FC<propsType> = (props) => {
    return (
        <div className={css.item}>
            Settings
        </div>
    )
}

export default Settings