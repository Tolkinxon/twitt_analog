import PostListItem from '../PostListItem'
import './PostList.css'

const PostList = ({ posts }) => {
  return (
    <ul className="app-list list-group">
      <PostListItem label={posts[0].label}  important = {posts[0].important}/>
    </ul>
  )
}

export default PostList
