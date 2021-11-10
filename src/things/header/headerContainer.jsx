import { connect } from 'react-redux'
import vk_icon from '../../assets/vk_icon.svg'
import Header from './header'
import React from 'react'
import { authMe, postLoginData } from '../../redux/authReducer'

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    vkIcon: vk_icon,
    loginInfo: state.auth
})

export default connect(mapStateToProps, {
    authMe, postLoginData
} )(HeaderContainer)