import { connect } from "react-redux";
import FindPeople from './findpeople'
import React, { FC } from 'react'
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { FindPeoplrSelectors } from "../../redux/selectors/selectors";
import { FindPeopleRedActions, FindPeopleRedThunks } from "../../redux/findPeopleReducer";
import { AppStateType } from "../../redux/redux-state";
import { personType } from "../../types/types";

type propsType = {
    countPeopleOnPage: number
    people: Array<personType>
    countPages: number
    isLoading: boolean
    isButtonLoading: Array<number>
    activePage: number

    followPerson: (userId: number) => void
    unFollowPerson: (userId: number) => void
    changeActivePage: (pageNymber: number) => void
    showPeople: (pageNumber: number, peopleOnPage: number) => void
}

const FindPeopleContainer: FC<propsType> = (props) => {
    
    const onNumberPageClick = (number: number) => {
        props.changeActivePage(number)
        props.showPeople(number, props.countPeopleOnPage)
    }
    return <FindPeople
        onNumberPageClick={onNumberPageClick}
        people={props.people}
        countPages={props.countPages}
        countPeopleOnPage={props.countPeopleOnPage}
        isLoading={props.isLoading}
        activePage={props.activePage}
        followPerson={props.followPerson}
        unFollowPerson={props.unFollowPerson}
        isButtonLoading={props.isButtonLoading} />
}

const mapStateToProps = (state: AppStateType) => {
    return {
        people: FindPeoplrSelectors.getPeopleSelector(state),
        countPages: FindPeoplrSelectors.countPagesSelector(state),
        countPeopleOnPage: FindPeoplrSelectors.countPeopleOnPageSelector(state),
        activePage: FindPeoplrSelectors.activePageSelector(state),
        isLoading: FindPeoplrSelectors.isLoadingSelector(state),
        isButtonLoading: state.findpeople.arrayButtonsLoading
    }
}
const mapDespatchToProps = {
    changeActivePage: FindPeopleRedActions.changeActivePage,
    showPeople: FindPeopleRedThunks.showPeople,
    followPerson: FindPeopleRedThunks.followPerson,
    unFollowPerson: FindPeopleRedThunks.unFollowPerson
}

export default compose<FC<{}>>(
    withAuthRedirect,
    connect(mapStateToProps, mapDespatchToProps)
)(FindPeopleContainer)
