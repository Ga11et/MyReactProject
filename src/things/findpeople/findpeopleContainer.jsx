import { connect } from "react-redux";
import FindPeople from './findpeople'
import React from 'react'
import {
    changeActivePage,
    showPeople,
    followPerson,
    unFollowPerson
} from "../../redux/findPeopleReducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { activePageSelector, countPagesSelector, countPeopleOnPageSelector, currentPageSelector, getPeopleSelector, isLoadingSelector } from "../../redux/selectors/selectors";

const FindPeopleContainer = (props) => {
    
    const onNumberPageClick = (number) => {
        props.changeActivePage(number)
        props.showPeople(number, props.countPeopleOnPage)
    }
    return <FindPeople
        onNumberPageClick={onNumberPageClick}
        people={props.people}
        countPages={props.countPages}
        countPeopleOnPage={props.countPeopleOnPage}
        isLoading={props.isLoading}
        followPerson={props.followPerson}
        unFollowPerson={props.unFollowPerson}
        isButtonLoading={props.isButtonLoading} />
}

let mapStateToProps = (state) => {
    return {
        people: getPeopleSelector(state),
        currentPage: currentPageSelector(state),
        countPages: countPagesSelector(state),
        countPeopleOnPage: countPeopleOnPageSelector(state),
        activePage: activePageSelector(state),
        isLoading: isLoadingSelector(state),
        isButtonLoading: state.findpeople.arrayButtonsLoading
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, { changeActivePage, showPeople, followPerson, unFollowPerson })
)(FindPeopleContainer)
