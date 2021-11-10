import { createSelector } from "reselect"

// FindPeoplePage
const findPeople = (someState) => someState.findpeople
export const isLoadingSelector = createSelector( findPeople, data => data.isLoading)
export const getPeopleSelector = createSelector( findPeople, data => data.people)
export const currentPageSelector = createSelector( findPeople, data => data.currentPage)
export const countPagesSelector = createSelector( findPeople, data => data.countPages)
export const countPeopleOnPageSelector = createSelector( findPeople, data => data.countPeopleOnPage)
export const activePageSelector = createSelector( findPeople, data => data.active)

// Description
const description = (someState) => someState.contentPage
export const profileInfoSelector = createSelector( description, data => data.profile)
export const statusSelector = createSelector( description, data => data.status)
export const isSuccessedSelector = createSelector( description, data => data.successed)

// Auth
const auth = (someState) => someState.auth
export const authIdSelector = createSelector( auth, data => data.userId)

