import React from 'react'
import css from './news.module.css'

type propsType = {

}

const News: React.FC<propsType> = (props) => {
    return (
        <div className={css.item}>
            News
        </div>
    )
}

export default News