import { Field, Form, Formik } from "formik";
import { parse, stringify } from "query-string";
import React, { FC, useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { FindPeopleRedActions } from "../../../redux/findPeopleReducer";
import { AppStateType } from "../../../redux/redux-state";
import { searchFormType } from "../../../types/types";
import css from './formikSearchForm.module.css'

type urlDataType = {
    term?: string
    friend?: string
    page?: string
}


export const FoemikSearchForm: FC<{}> = (props) => {


    const searchForm = useSelector((state: AppStateType) => state.findpeople.searchForm)
    const activePage = useSelector((state: AppStateType) => state.findpeople.active)

    const history = useHistory()

    const dispatch = useDispatch()

    useMemo(() => {
        const data: urlDataType = parse(history.location.search)
        const dataForDispatch: searchFormType = {}
        if (!!data.term) {dataForDispatch.term = data.term} else {dataForDispatch.term = ''}
        if (!!data.friend) {dataForDispatch.friend = data.friend} else {dataForDispatch.friend = ''}
        dispatch(FindPeopleRedActions.putSearchForm(dataForDispatch))
    }, [])

    useEffect(() => {
        const data: urlDataType = {}
        if (!!searchForm.term) {data.term = searchForm.term}
        if (!!searchForm.friend) {data.friend = searchForm.friend}
        if (activePage > 1) {data.page = String(activePage)}
        history.push({
            pathname: '/find',
            search: stringify(data)
        })
    }, [searchForm, activePage])

    return <>
        <Formik
            enableReinitialize
            initialValues={searchForm}
            onSubmit={(values, { setSubmitting }) => {
                dispatch(FindPeopleRedActions.putSearchForm(values))
                setSubmitting(false);
            }} >
            {({ isSubmitting }) => (
                <Form className={css.main}>
                    <Field type="text" name="term" />
                    <Field component="select" id="friend" name="friend" >
                        <option value="">All</option>
                        <option value='true'>Only followed</option>
                        <option value='false'>Only not followed</option>
                    </Field>

                    <button type="submit" disabled={isSubmitting}>
                        Search
                    </button>
                </Form>
            )}
        </Formik>
    </>
}