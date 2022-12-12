import PostListItem from '../PostListItem'
import './PostList.css'

const PostList = ({posts}) => {

  const elements = posts.map(item => {
    return (
      <li className="list-group-item">
        <PostListItem  label={item.label} important={item.important}/>
      </li>
    )
  })


  return (
    <ul className="app-list list-group">
      {elements}
    </ul>
  )
}

export default PostList
