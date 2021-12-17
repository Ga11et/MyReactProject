import DescriptionContainer from './Description/descriptionContainer'
import React from 'react'
import { Posts } from './Posts/posts'

type propsType = {
}

const ContentPage: React.FC<propsType> = (props) => {
    return <section style={{ width: '100%' }}>
            <DescriptionContainer />
            <Posts />
        </section>
}

export default ContentPage
