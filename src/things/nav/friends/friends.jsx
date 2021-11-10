import css from './friends.module.css'
import Friend from './friend/friend'

const Friends = (props) => {

    let allfriends = props.state.map(el => <Friend key={el.id} img={el.img} name={el.name} />)

    return (
        <div className={css.main}>
            <h3>Friends</h3>
            <div>
                {allfriends}
            </div>
        </div>
    )
}

export default Friends