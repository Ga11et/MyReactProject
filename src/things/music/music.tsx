import React from 'react'
import css from './music.module.css'

type propsType = {

}

let Music: React.FC<propsType> = (props) => {
    return (
        <div className={css.item}>
            Music
        </div>
    )
}

export default Music