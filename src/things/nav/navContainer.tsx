import { connect } from 'react-redux'
import { AuthRedThunks } from '../../redux/authReducer'
import Nav from './nav'
import React from 'react'
import { AppStateType } from '../../redux/redux-state'
import { NavStateType } from '../../redux/navReducer'

type propsType = {
    state: NavStateType
    isAuth: boolean

    logout: () => void
}

const NavContainer: React.FC<propsType> = (props) => {
    return <Nav {...props} />
}

const mapStateToProps = (state: AppStateType) => ({
    state: state.navPage,
    isAuth: state.auth.isAuth
})
const mapDespatchToProps = {
    logout: AuthRedThunks.logout
}

export default connect(mapStateToProps, mapDespatchToProps)(NavContainer)