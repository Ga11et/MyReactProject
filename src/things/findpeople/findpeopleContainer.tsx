import { connect } from "react-redux";
import FindPeople from './findpeople'
import React, { FC, useEffect, useMemo } from 'react'
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { FindPeoplrSelectors } from "../../redux/selectors/selectors";
import { FindPeopleRedActions, FindPeopleRedThunks } from "../../redux/findPeopleReducer";
import { AppStateType } from "../../redux/redux-state";
import { personType, searchFormType } from "../../types/types";

type propsType = {
    countPeopleOnPage: number
    people: Array<personType>
    countPages: number
    isLoading: boolean
    isButtonLoading: Array<number>
    activePage: number,
    searchForm: searchFormType

    followPerson: (userId: number) => void
    unFollowPerson: (userId: number) => void
    changeActivePage: (pageNymber: number) => void
    showPeople: (pageNumber: number, peopleOnPage: number, searchForm: searchFormType) => void
    putSearchForm: (searchForm: searchFormType) => void
}

const FindPeopleContainer: FC<propsType> = ({searchForm, activePage, countPeopleOnPage, showPeople, ...props}) => {
    
    useEffect(() => {
        props.changeActivePage(1)
        showPeople(1, countPeopleOnPage, searchForm)
    }, [searchForm, countPeopleOnPage, showPeople])

    useEffect(() => {
        showPeople(activePage, countPeopleOnPage, searchForm)
    }, [activePage])

    useMemo(() => {
        showPeople(1, countPeopleOnPage, searchForm)
    }, [searchForm, countPeopleOnPage, showPeople])

    const onNumberPageClick = (number: number) => {
        props.changeActivePage(number)
    }
    return <FindPeople
        searchForm={searchForm}
        onNumberPageClick={onNumberPageClick}
        people={props.people}
        countPages={props.countPages}
        countPeopleOnPage={countPeopleOnPage}
        isLoading={props.isLoading}
        activePage={activePage}
        followPerson={props.followPerson}
        unFollowPerson={props.unFollowPerson}
        isButtonLoading={props.isButtonLoading}
        putSearchForm={props.putSearchForm}  />
}

const mapStateToProps = (state: AppStateType) => {
    return {
        people: FindPeoplrSelectors.getPeopleSelector(state),
        countPages: FindPeoplrSelectors.countPagesSelector(state),
        countPeopleOnPage: FindPeoplrSelectors.countPeopleOnPageSelector(state),
        activePage: FindPeoplrSelectors.activePageSelector(state),
        isLoading: FindPeoplrSelectors.isLoadingSelector(state),
        isButtonLoading: state.findpeople.arrayButtonsLoading,
        searchForm: state.findpeople.searchForm
    }
}
const mapDespatchToProps = {
    changeActivePage: FindPeopleRedActions.changeActivePage,
    showPeople: FindPeopleRedThunks.showPeople,
    followPerson: FindPeopleRedThunks.followPerson,
    unFollowPerson: FindPeopleRedThunks.unFollowPerson,
    putSearchForm: FindPeopleRedActions.putSearchForm
}

export default compose<FC<{}>>(
    withAuthRedirect,
    connect(mapStateToProps, mapDespatchToProps)
)(FindPeopleContainer)
