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
      { label: 'I need to learn VueJs', important: false, like: false, id: 1 },
      {label: 'I need to learn ReactJs', important: false,like: false, id: 2,},
      { label: 'I need to learn NodeJs', important: false, like: false, id: 3 },
    ],
    maxId: 4,
    term: ''
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

  addItem = (body) => {
    const newItem = {
      label: body,
      important: false,
      like: false,
      id: this.state.maxId,
    }
    this.setState({ maxId: this.state.maxId + 1 })

    this.setState(({ data }) => {
      const newData = [...data, newItem]
      return {
        data: newData,
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id)
      const newItem = {...data[index], important: !data[index].important}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return{
        data: newArr
      }
    })

  }

  onToggleLiked = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id)
      const newItem = {...data[index], like: !data[index].like}
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]
      return{
        data: newArr
      }
    })
  }


  searchPost = (items, term) => {
    if(items.length === 0){
      return items
    }
  return items.filter((item) => {return item.label.indexOf(term) > -1})
  }

  render() {
    const {data, term} = this.state
    const liked = data.filter(item => item.like).length
    const posts = data.length

    const visiblePosts = this.searchPost(data, term)
    return (
      <div className="app">
        <AppHeader liked={liked} posts={posts} />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        <PostList
          posts={visiblePosts}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleLiked={this.onToggleLiked}
        />
        <PostAddForm addItem={this.addItem} />
      </div>
    )
  }
}
