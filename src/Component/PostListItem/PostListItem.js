import './PostListItem.css'

const PostListItem = ({label, important = false}) => {

  let classnames = "app-list-item d-flex justify-content-between"

  if(important){
    classnames += ' important'
  }

  return (
    <div className={classnames}>
      <span className="app-list-item-label ">{label}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn-star btn-sm">
          <i className="fa fa-star"></i>
        </button>
        <button className="btn-trash btn-sm">
          <i className="fa fa-trash"></i>
        </button>
        <i className="fas fa-heart"></i>
      </div>
    </div>
  )
}

export default PostListItem
