import { connect } from 'react-redux'
import { createNewPost, setProfile } from '../../../redux/contentReducer'
import Posts from './posts'
import React from 'react'

class PostsContainer extends React.Component {
    render() {
        return (
            <Posts {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.contentPage.posts,
    }
}

export default connect(mapStateToProps, {
    createNewPost, setProfile
})(PostsContainer)
