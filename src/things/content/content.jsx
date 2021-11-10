import css from './content.module.css'
import PostsContainer from './Posts/postsContainer'
import DescriptionContainer from './Description/descriptionContainer'


let Content = (props) => {
    return (
        <div className={css.main}>
            <DescriptionContainer />
            <PostsContainer />
        </div>
)}

export default Content