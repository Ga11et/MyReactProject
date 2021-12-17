import css from './findpeople.module.css'
import Person from './person/person'
import userImg from '../../redux/img/user.jpg'
import React, { useEffect } from 'react'
import loadingIconfrom from '../../assets/loading.svg'
import { PaginatorScript } from '../component/paginator/paginator'
import { FoemikSearchForm } from './formiksearchform/formikSearchForm'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/redux-state'
import { FindPeopleRedActions, FindPeopleRedThunks } from '../../redux/findPeopleReducer'
import { Pagination } from 'antd'



const FindPeoplePage: React.FC<{}> = (props) => {

    const people = useSelector((state: AppStateType) => state.findpeople.people)
    const arrayButtonsLoading = useSelector((state: AppStateType) => state.findpeople.arrayButtonsLoading)
    const countPeople = useSelector((state: AppStateType) => state.findpeople.countPeople)
    const countPeopleOnPage = useSelector((state: AppStateType) => state.findpeople.countPeopleOnPage)
    const activePage = useSelector((state: AppStateType) => state.findpeople.active)
    const isLoading = useSelector((state: AppStateType) => state.findpeople.isLoading)
    const searchForm = useSelector((state: AppStateType) => state.findpeople.searchForm)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(FindPeopleRedThunks.showPeople(activePage, countPeopleOnPage, searchForm))
    }, [activePage])

    useEffect(() => {
        dispatch(FindPeopleRedActions.changeActivePage(1))
        if (activePage === 1) dispatch(FindPeopleRedThunks.showPeople(1, countPeopleOnPage, searchForm))
    }, [searchForm])

    const onNumberPageClick = (number: number) => {
        dispatch(FindPeopleRedActions.changeActivePage(number))
    }

    const persons = people.map((el) => {
        return (
            <Person userId={el.id}
                avatar={el.photos.small != null ? el.photos.small : userImg}
                followed={el.followed}
                name={el.name}
                status={el.status}
                country={"some country"}
                city={"some city"}
                isButtonLoading={arrayButtonsLoading}
                key={el.id} />
        )
    })
    return (
        <div className={css.main}>
            <FoemikSearchForm />
            <Pagination showSizeChanger={false}
                current={activePage}
                showQuickJumper
                total={countPeople}
                onChange={onNumberPageClick}
                style={{ marginTop: '30px' }} />
            {isLoading ? <img src={loadingIconfrom} alt='loadingIcon' /> : null}
            {persons}
            <Pagination showSizeChanger={false}
                showQuickJumper
                current={activePage}
                total={countPeople}
                onChange={onNumberPageClick}
                style={{ marginTop: '30px' }} />
        </div>
    )
}

export default FindPeoplePage