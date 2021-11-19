import { AppStateType } from '../redux/redux-state';
import React, {FC } from "react"
import { connect } from "react-redux"
import { Redirect } from "react-router-dom"
import { RedirectProps } from "react-router"

type propsType = {
    isAuth: boolean
}

export function withAuthRedirect<WP extends RedirectProps>(Component: FC<WP>) {

    const RedirectComponent: FC<RedirectProps & propsType> = ({isAuth, ...props}) => {
        
        if (!isAuth) return <Redirect to="/login" />
        else return <Component {...props as WP} />
    
    }

    const mapStateToProps = (state: AppStateType) => ({
        isAuth: state.auth.isAuth
    })

    return connect(mapStateToProps)(RedirectComponent)
}

