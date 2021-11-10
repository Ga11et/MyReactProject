import Friends from './friends/friends'
import css from './nav.module.css'
import Link from './navlink/navlink'

let Nav = (props) => {

    let links = props.state.links.map( el => <Link key={el.id} name={el.name} to={el.to} /> )

    return (
        <div className={css.main}>
            {links}
            <Friends state={props.state.friends} />
            {props.isAuth ? <p onClick={props.logout}>Log out</p> : null}
        </div>
)}

export default Nav