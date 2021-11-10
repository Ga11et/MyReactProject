import { connect } from 'react-redux'
import Description from './description'
import searchIcon from '../../../assets/search.svg'
import { 
    getUserInfo, 
    putStatus,
    setProfile,
    changeProfilePhoto,
    profileFormSubmit
} from '../../../redux/contentReducer'
import { Redirect, withRouter } from 'react-router-dom'
import altphoto from '../../../assets/user.jpg'
import { withAuthRedirect } from '../../../hoc/withAuthRedirect'
import { compose } from 'redux'
import { Preloader } from '../../component/preloader/preloader'
import { 
    authIdSelector, 
    isSuccessedSelector, 
    profileInfoSelector, 
    statusSelector,
} from '../../../redux/selectors/selectors'
import { useEffect, useState, useMemo } from 'react'

const DescriptionContainer = ({authId, getUserInfo, ...props}) => {

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

let mapStateToProps = (state) => {
    return ({
        searchIcon,
        altphoto,
        profileInfo: profileInfoSelector(state),
        status: statusSelector(state),
        authId: authIdSelector(state),
        isSuccessed: isSuccessedSelector(state)
    })
}
export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, { setProfile, getUserInfo, putStatus, changeProfilePhoto, profileFormSubmit })
)(DescriptionContainer)