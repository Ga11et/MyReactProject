import { connect } from 'react-redux'
import Description from './description'
import searchIcon from '../../../assets/search.svg'
import { ContentRedActions, ContentRedThunks } from '../../../redux/contentReducer'
import { Redirect, withRouter } from 'react-router-dom'
import altphoto from '../../../assets/user.jpg'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { Preloader } from '../../component/preloader/preloader'
import React, { useEffect, useState, useMemo, FC } from 'react'
import { profileType } from '../../../types/types'
import { AppStateType } from '../../../redux/redux-state'
import { AuthSelectors, DescriptionSelectors } from '../../../redux/selectors/selectors'
import { compose } from 'redux'

type propsType = {
    authId: number
    match: any
    isSuccessed: boolean
    searchIcon: string
    profileInfo: profileType
    altphoto: string
    status: string

    putStatus: (status: string) => void
    changeProfilePhoto: (file: any) => void
    profileFormSubmit: (info: profileType) => Promise<void>
    getUserInfo: (id: number) => profileType
    setProfile: (profile: profileType) => void
}

const DescriptionContainer: React.FC<propsType> = ({authId, getUserInfo, ...props}) => {

    const [idPath, setIdPath] = useState(props.match.params.userId) 
    const [isSuccessed, setIsSuccessed] = useState(props.isSuccessed)

    const isMyProfile = (+idPath === +authId)

    useEffect( () => {
        setIdPath(props.match.params.userId)
    }, [props.match.params.userId] )

    useEffect( () => {
        setIsSuccessed(props.isSuccessed)
    }, [props.isSuccessed] )

    useMemo( () => {
        if (idPath) getUserInfo(idPath)
    }, [idPath, getUserInfo])

    if (!idPath) return <Redirect to={`profile/${authId}`} />
    else if (!isSuccessed) return <Preloader /> 
    else return <Description isMyProfile={isMyProfile} {...props} />
}

let mapStateToProps = (state: AppStateType) => ({
    searchIcon,
    altphoto,
    profileInfo: DescriptionSelectors.profileInfoSelector(state),
    status: DescriptionSelectors.statusSelector(state),
    authId: AuthSelectors.authIdSelector(state),
    isSuccessed: DescriptionSelectors.isSuccessedSelector(state)
})
const mapDispatchToProps = {
    getUserInfo: ContentRedThunks.getUserInfo,
    putStatus: ContentRedThunks.putStatus,
    setProfile: ContentRedActions.setProfile,
    changeProfilePhoto: ContentRedThunks.changeProfilePhoto,
    profileFormSubmit: ContentRedThunks.profileFormSubmit
}

export default compose<FC<{}>>(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(DescriptionContainer)