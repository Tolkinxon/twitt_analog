import './PostListItem.css'
import React from 'react'

export default class PostListItem extends React.Component{

  state = {
    important: false,
    like: false
  }

  onImportant = () => {
    this.setState({important: !this.state.important})

  }

  
  onLike = () => {
    this.setState({like: !this.state.like})

  }

  render() {
    const {label} = this.props
    const {important, like} = this.state

    let classnames = "app-list-item d-flex justify-content-between"

    if(important){
      classnames += ' important'
    }

    if(like){
      classnames += ' like'
    }

    return(
      <div className={classnames}>
      <span className="app-list-item-label " onClick={this.onLike}>{label}</span>
      <div className="d-flex justify-content-center align-items-center">
        <button 
          type='button'
          className="btn-star btn-sm"
          onClick={this.onImportant}>
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
}


