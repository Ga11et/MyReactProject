import { newMessage } from '../../redux/dialogsReducer'
import Dialogs from './dialogs'
import {connect} from 'react-redux'
import React from 'react'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class DialogsContainer extends React.Component {
    render() {
        return <Dialogs {...this.props} />
    }
}


let mapStateToProps = (state) => {
    return {
        persons: state.dialogPage.persons,
        messages: state.dialogPage.messages,
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { newMessage })
)(DialogsContainer)