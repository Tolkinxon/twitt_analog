import './PostAddForm.css'

const PostAddForm = ({addItem}) => {

  return (
    <div className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What do you think?"
        className="form-control new-post-label"
      />
      <button 
      type="submit" 
      className="btn btn-outline-secondary"
      onClick={() => addItem('hello world')}>
        Add Post
      </button>
    </div>
  )
}

export default PostAddForm
