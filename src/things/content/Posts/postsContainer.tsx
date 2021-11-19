import { connect } from 'react-redux'
import Posts from './posts'
import React from 'react'
import { AppStateType } from '../../../redux/redux-state'
import { PostType, profileType } from '../../../types/types'
import { ContentRedActions } from '../../../redux/contentReducer'

type propsType = {
    posts: Array<PostType>
    
    createNewPost: (text: string) => void
    setProfile: (profile: profileType) => void
}

const PostsContainer: React.FC<propsType> = (props) => {

    return (
        <Posts {...props} />
    )

}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.contentPage.posts,
    }
}

const mapDispatchToProps = {
    createNewPost: ContentRedActions.createNewPost,
    setProfile: ContentRedActions.setProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer)
