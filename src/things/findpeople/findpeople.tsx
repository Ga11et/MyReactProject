import css from './findpeople.module.css'
import Person from './person/person'
import userImg from '../../redux/img/user.jpg'
import React from 'react'
import loadingIconfrom from '../../assets/loading.svg'
import {PaginatorScript} from '../component/paginator/paginator'
import { personType, searchFormType } from '../../types/types'
import { FoemikSearchForm } from './formiksearchform/formikSearchForm'

type propsType = {
    people: Array<personType>
    isButtonLoading: Array<number>
    countPages: number
    countPeopleOnPage: number
    activePage: number
    isLoading: boolean
    searchForm: searchFormType

    onNumberPageClick: (pageId: number) => void
    followPerson: (userId: number) => void
    unFollowPerson: (userId: number) => void
    putSearchForm: (searchForm: searchFormType) => void
}

const FindPeople: React.FC<propsType> = (props) => {


    const persons = props.people.map((el) => {
        return (
            <Person userId={el.id}
                avatar={el.photos.small != null ? el.photos.small : userImg}
                followed={el.followed}
                name={el.name}
                status={el.status}
                country={"some country"}
                city={"some city"}
                follow={props.followPerson}
                unFollow={props.unFollowPerson}
                isButtonLoading={props.isButtonLoading}
                key={el.id} />
    )})
    return (
        <div className={css.main}>
            <FoemikSearchForm putSearchForm={props.putSearchForm} />
            <PaginatorScript countPages={props.countPages}
                countPeopleOnPage={props.countPeopleOnPage}
                onNumberPageClick={props.onNumberPageClick}
                activePage={props.activePage} />
            {props.isLoading ? <img src={loadingIconfrom} alt='loadingIcon' /> : null}
            {persons}
            <PaginatorScript countPages={props.countPages}
                countPeopleOnPage={props.countPeopleOnPage}
                onNumberPageClick={props.onNumberPageClick}
                activePage={props.activePage} />
        </div>
    )
}

export default FindPeople