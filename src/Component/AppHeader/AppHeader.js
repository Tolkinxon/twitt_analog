import './AppHeader.css'
const AppHeader = ({liked, posts}) => {
  return (
    <div className="app-header d-flex">
      <h1>Soliyev Tolkinxon</h1>
      <h2>{posts} posts, like {liked}</h2>
    </div>
  )
}

export default AppHeader
