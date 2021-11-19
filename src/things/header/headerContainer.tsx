import { connect } from 'react-redux'
import vk_icon from '../../assets/vk_icon.svg'
import Header from './header'
import React from 'react'
import { AuthStateType } from '../../redux/authReducer'
import { AppStateType } from '../../redux/redux-state'

type propsType = {
    vkIcon: string
    loginInfo: AuthStateType
}

const HeaderContainer: React.FC<propsType> = (props) => {
    return (
        <Header {...props} />
    )
}

const mapStateToProps = (state: AppStateType) => ({
    vkIcon: vk_icon,
    loginInfo: state.auth
})
const mapDespatchToProps = {
}

export default connect(mapStateToProps, mapDespatchToProps)(HeaderContainer)