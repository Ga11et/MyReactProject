import { Field, Form, Formik } from "formik";
import React, { FC } from "react"
import { searchFormType } from "../../../types/types";
import css from './formikSearchForm.module.css'

type props = {
    putSearchForm: (searchForm: searchFormType) => void
}

export const FoemikSearchForm: FC<props> = (props) => {


    return <>
        <Formik 
            initialValues={{ term: '', friend: '' }}
            onSubmit={(values, { setSubmitting }) => {
                props.putSearchForm(values)
                setSubmitting(false);
            }} >
            {({ isSubmitting }) => (
                <Form className={css.main}>
                    <Field type="test" name="term" />
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