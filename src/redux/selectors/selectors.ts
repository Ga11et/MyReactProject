import { createSelector } from "reselect"
import { AppStateType } from "../redux-state"

// FindPeoplePage
const findPeople = (someState: AppStateType) => someState.findpeople
export const FindPeoplrSelectors = {
    isLoadingSelector: createSelector( findPeople, data => data.isLoading),
    getPeopleSelector: createSelector( findPeople, data => data.people),
    countPagesSelector: createSelector( findPeople, data => data.countPages),
    countPeopleOnPageSelector: createSelector( findPeople, data => data.countPeopleOnPage),
    activePageSelector: createSelector( findPeople, data => data.active)
}

// Description
const description = (someState: AppStateType) => someState.contentPage
export const DescriptionSelectors = {
    profileInfoSelector: createSelector( description, data => data.profile),
    statusSelector: createSelector( description, data => data.status),
    isSuccessedSelector: createSelector( description, data => data.successed)
}

// Auth
const auth = (someState: AppStateType) => someState.auth
export const AuthSelectors = {
    authIdSelector: createSelector( auth, data => data.userId)
}

