import './PostListItem.css'
import React from 'react'

export default class PostListItem extends React.Component {
  render() {
    const {
      label,
      onDelete,
      onToggleImportant,
      onToggleLiked,
      important,
      like,
    } = this.props

    let classnames = 'app-list-item d-flex justify-content-between'

    if (important) {
      classnames += ' important'
    }

    if (like) {
      classnames += ' like'
    }

    return (
      <div className={classnames}>
        <span className="app-list-item-label " onClick={onToggleLiked} >{label}</span>
        <div className="d-flex justify-content-center align-items-center">
          <button 
          type="button" 
          className="btn-star btn-sm"
          onClick={onToggleImportant}>
            <i className="fa fa-star"></i>
          </button>
          <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
            <i className="fa fa-trash"></i>
          </button>
          <i className="fas fa-heart"></i>
        </div>
      </div>
    )
  }
}
