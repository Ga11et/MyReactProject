import Dialogs from './dialogs'
import {connect} from 'react-redux'
import React, { FC } from 'react'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { DialogRedActions } from '../../redux/dialogsReducer'
import { AppStateType } from '../../redux/redux-state'
import { dialogsPersonType, messageType } from '../../types/types'

type propsType = {
    persons: Array<dialogsPersonType>
    messages: Array<messageType>

    newMessage: (text: string) => void
}

const DialogsContainer: React.FC<propsType> = (props) => {
    return <Dialogs {...props} />
}


const mapStateToProps = (state: AppStateType) => ({
    persons: state.dialogPage.persons,
    messages: state.dialogPage.messages,
})

const mapDespatchToProps = {
    newMessage: DialogRedActions.newMessage
}

export default compose<FC<{}>>(
    withAuthRedirect,
    connect(mapStateToProps, mapDespatchToProps)
)(DialogsContainer)