import { connect } from 'react-redux'
import { logout } from '../../redux/authReducer'
import Nav from './nav'
import React from 'react'

class NavContainer extends React.Component {
    render() {
        return <Nav {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.navPage,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    logout
})(NavContainer)