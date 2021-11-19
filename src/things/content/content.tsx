import css from './content.module.css'
import PostsContainer from './Posts/postsContainer'
import DescriptionContainer from './Description/descriptionContainer'
import React from 'react'

type propsType = {
}

const Content: React.FC<propsType> = (props) => {
    return (
        <div className={css.main}>
            <DescriptionContainer />
            <PostsContainer />
        </div>
)}

export default Content