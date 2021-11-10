import css from './findpeople.module.css'
import Person from './person/person'
import userImg from '../../redux/img/user.jpg'
import React from 'react'
import loadingIconfrom from '../../assets/loading.svg'
import {PaginatorScript} from '../component/paginator/paginator'



const FindPeople = (props) => {
    const persons = props.people.map((el) => {
        return (
            <Person userId={el.id}
                avatar={el.photos.small != null ? el.photos.small : userImg}
                followed={el.followed}
                name={el.name}
                status={el.status}
                country={"el.location.country"}
                city={"el.location.city"}
                follow={props.followPerson}
                unFollow={props.unFollowPerson}
                isButtonLoading={props.isButtonLoading}
                key={el.id} />
    )})
            
    // let count = Math.ceil(props.countPages / props.countPeopleOnPage)
    // let numbers = []
    // for (let i = 1; i <= count; i++) numbers[i] = i
    // const numbersJsx = numbers.map(el => <div key={el} 
    //     onClick={() => props.onNumberPageClick(el)} 
    //     className={`${css.numberPage} ${props.activePage === el ? css.active : css.noactive}`}>{el}</div>)
    return (
        <div className={css.main}>
            <PaginatorScript countPages={props.countPages}
                countPeopleOnPage={props.countPeopleOnPage}
                onNumberPageClick={props.onNumberPageClick}
                activePage={props.activePage} />
            {props.isLoading ? <img src={loadingIconfrom} alt='loadingIcon' /> : null}
            {persons}
        </div>
    )
}

export default FindPeople