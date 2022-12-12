import AppHeader from '../AppHeader'
import SearchPanel from '../SearchPanel'
import PostStatusFilter from '../PostStatusFilter'
import PostList from '../PostList'
import PostAddForm from '../PostAddForm'
import './App.css'
import React from 'react'

export default class App extends React.Component {
  state = {
    data: [
      { label: 'I need to learn VueJs', important: true, id: 'qa' },
      { label: 'I need to learn ReactJs', important: false, id: 'qb' },
      { label: 'I need to learn NodeJs', important: false, id: 'qf' },
    ],
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id)
  
      // data.splice(index, 1)
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)]
      return {
        data: newArr,
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm />
      </div>
    )
  }
}
