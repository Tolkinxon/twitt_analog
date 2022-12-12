import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import PostStatusFilter from '../PostStatusFilter'
import PostList from '../PostList'
import PostAddForm from '../PostAddForm'
import './App.css'

const App = () => {

  const data = [
    {label: "I need to learn VueJs", important: true},
    {label: "I need to learn ReactJs", important: false},
    {label: "I need to learn NodeJs", important: false},
  ]

  return (
    <div className='app'>
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      <PostList posts = {data}/>
      <PostAddForm />
    </div>
  )
}

export default App
