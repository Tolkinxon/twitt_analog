import './PostAddForm.css'

const PostAddForm = () => {
  return (
    <form className="bottom-panel d-flex">
      <input
        type="text"
        placeholder="What do you think?"
        className="form-control new-post-label"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add Post
      </button>
    </form>
  )
}

export default PostAddForm
