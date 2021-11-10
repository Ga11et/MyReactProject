import { connect } from "react-redux"
import { Redirect } from "react-router-dom"



export const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        return <>
            {!props.isAuth && <Redirect to="/login" />}
            <Component {...props} />
        </>
    }

    const mapStateToProps = (state) => ({
        isAuth: state.auth.isAuth
    })

    const withAuthRedirectConnect = connect(mapStateToProps)(RedirectComponent)

    return withAuthRedirectConnect
}

